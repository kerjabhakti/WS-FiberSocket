package module

import (
	"fmt"
	"log"

	"github.com/gofiber/websocket/v2"
)

type Client struct {
	Id   string
	Conn *websocket.Conn
} // Add more data to this type if needed

type Message struct {
	Id      string
	Message string
} // Add more data to this type if needed

var Clients = make(map[string]*websocket.Conn) // Note: although large maps with pointer-like types (e.g. strings) as keys are slow, using pointers themselves as keys is acceptable and fast
var Register = make(chan Client)
var SendMesssage = make(chan Message)
var Unregister = make(chan string)

func RunHub() {
	for {
		select {
		case connection := <-Register:
			Clients[connection.Id] = connection.Conn
			log.Println("connection registered")
			log.Println(connection)

		case message := <-SendMesssage:
			log.Println("message received:", message)
			connection := Clients[message.Id]
			err := connection.WriteMessage(websocket.TextMessage, []byte(message.Message))
			if err != nil {
				log.Println(err)
			}

		case connection := <-Unregister:
			// Remove the client from the hub
			delete(Clients, connection)

			log.Println("connection unregistered")
		}
	}
}

func RunSocket(c *websocket.Conn) (Id string) {
	var s Client
	// When the function returns, unregister the client and close the connection
	defer func() {
		Unregister <- s.Id
		c.Close()
	}()
	messageType, message, err := c.ReadMessage()
	if err != nil {
		if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
			log.Println("read error:", err)
		}
		return // Calls the deferred function, i.e. closes the connection on error
	}
	Id = string(message)
	if messageType == websocket.TextMessage {
		// Get the received message
		// Register the client
		s = Client{
			Id:   Id,
			Conn: c,
		}
		Register <- s
		for {
			messageType, message, err := c.ReadMessage()
			if err != nil {
				if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
					log.Println("read error:", err)
				}
				return // Calls the deferred function, i.e. closes the connection on error
			}

			if messageType == websocket.TextMessage {
				// Broadcast the received message
				fmt.Println(string(message))
			} else {
				log.Println("websocket message received of type", messageType)
			}
		}
	} else {
		log.Println("websocket message received of type", messageType)
	}
	return

}

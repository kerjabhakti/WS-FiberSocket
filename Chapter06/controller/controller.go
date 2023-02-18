package controller

import (
	"fmt"
	"log"
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/websocket/v2"
	"github.com/whatsauth/wasocket"
)

func WebSocket(c *websocket.Conn) {
	a := wasocket.RunSocket(c)
	fmt.Println(a)

}

func GetHelloword(c *fiber.Ctx) error {
	a := wasocket.Message{
		Id:      "testing",
		Message: "hello word",
	}
	//wasocket.SendMesssage <- a
	ada := wasocket.SendStructTo("testing", a)
	return c.SendString(strconv.FormatBool(ada))
}

func GetWebSocketId(c *websocket.Conn) {
	id := c.Params("id")
	fmt.Println(id)
	var (
		mtype int
		msg   []byte
		err   error
	)
	for {
		mtype, msg, err = c.ReadMessage()
		if err != nil {
			break
		}
		log.Printf("Read: %s", msg)

		err = c.WriteMessage(mtype, msg)
		if err != nil {
			break
		}
	}

}

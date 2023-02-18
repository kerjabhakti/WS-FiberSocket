package controller

import (
	"chapter03/module"
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/websocket/v2"
)

func WebSocket(c *websocket.Conn) {
	a := module.RunSocket(c)
	fmt.Println(a)

}

func GetHelloword(c *fiber.Ctx) error {
	a := module.Message{
		Id:      "testing",
		Message: "hello word",
	}
	module.SendMesssage <- a
	return c.SendString("Hello, World!")
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

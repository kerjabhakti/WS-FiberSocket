package controller

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/websocket/v2"
)

type Person struct {
	Name  string `json:"name" xml:"name" form:"name"`
	Email string `json:"email" xml:"email" form:"email"`
}

type Response struct {
	Status string `json:"status" xml:"status" form:"status"`
}

func GetHelloword(c *fiber.Ctx) error {
	return c.SendString("Hello, World!")
}

func PostPerson(c *fiber.Ctx) error {
	person := new(Person)

	// Binds the request body to the Person struct
	if err := c.BodyParser(person); err != nil {
		return err
	}

	// Print data from the Person struct
	fmt.Println(person.Name, person.Email)
	var a Response
	a.Status = "ok"
	return c.JSON(a)
}

func GetPerson(c *fiber.Ctx) error {
	person := new(Person)

	// Binds the request body to the Person struct
	if err := c.BodyParser(person); err != nil {
		return err
	}

	// Print data from the Person struct
	fmt.Println(person.Name, person.Email)
	var a Response
	a.Status = c.Params("name")
	return c.JSON(a)
}

func WebSocket(c *websocket.Conn) {
	for {
		mtype, msg, err := c.ReadMessage()
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

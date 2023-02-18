package main

import (
	"chapter06/url"
	"log"

	"github.com/whatsauth/wasocket"

	"github.com/gofiber/fiber/v2"
)

func main() {
	go wasocket.RunHub()
	site := fiber.New()
	url.Web(site)
	log.Fatal(site.Listen(":3000"))
}

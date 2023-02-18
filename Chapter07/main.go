package main

import (
	"chapter01/url"
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	site := fiber.New()
	url.Web(site)
	log.Fatal(site.Listen(":3000"))
}

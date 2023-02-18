package main

import (
	"chapter03/module"
	"chapter03/url"
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	go module.RunHub()
	site := fiber.New()
	url.Web(site)
	log.Fatal(site.Listen(":3000"))
}

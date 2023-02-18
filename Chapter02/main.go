package main

import (
	"chapter02/module"
	"chapter02/url"
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	go module.RunHub()
	site := fiber.New()
	url.Web(site)
	log.Fatal(site.Listen(":3000"))
}

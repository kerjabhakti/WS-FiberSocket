package main

import (
	"chapter05/config"
	"chapter05/url"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func SetPort() string {
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}
	return port
}

func main() {
	site := fiber.New()
	site.Use(cors.New(config.Cors))
	url.Web(site)
	log.Fatal(site.Listen(":" + SetPort()))
}

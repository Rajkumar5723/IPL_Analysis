package main

import (
	"fmt"
	"log"
	"net/http"
)

func loginFunc(writer http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		// If the method is not POST, serve the login form
		http.ServeFile(writer, r, "login.html")
		return
	}

	// Parse form
	err := r.ParseForm()
	if err != nil {
		http.Error(writer, "Error parsing form", http.StatusBadRequest)
		return
	}

	// Retrieve form values
	username := r.Form.Get("username")
	password := r.Form.Get("password")

	// Check credentials
	if username == "admin" && password == "admin" {
		// Successful login
		writer.Write([]byte("<html><body><h1>Login successful</h1></body></html>"))
	} else {
		// Failed login
		writer.Write([]byte("<html><body><h1>Login failed. Please try again.</h1></body></html>"))
	}
}

func main() {
	http.HandleFunc("/", func(writer http.ResponseWriter, request *http.Request) {
		writer.Write([]byte("<html><body><h1>Home</h1><br/><a href='/login'>Login</a></body></html>"))
	})

	http.HandleFunc("/login", loginFunc)

	fmt.Println("Server is running on http://127.0.0.1:8080")
	log.Fatal(http.ListenAndServe("127.0.0.1:8080", nil))
}

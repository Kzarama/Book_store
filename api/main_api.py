from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)

CORS(app)


@app.route("/signin", methods=["POST"])
def signin():
    email = request.get_json()["email"]
    password = request.get_json()["password"]
    if email == "test@gmail.com" and password == "123456":
        response_data = {
            "message": "Inicio correcto",
            "status": 200,
            "email": email,
            "token": "qwerty",
        }
        return jsonify(response_data), 200
    else:
        response_data = {
            "message": "Credential incorrectas",
            "status": 401,
        }
        return jsonify(response_data), 401


@app.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    response_data = {
        "message": "Registro correcto",
        "status": 201,
        "token": "qwerty",
        "data": {
            "name": name,
            "email": email,
            "password": password,
        },
    }

    return jsonify(response_data), 201


@app.route("/get_user/<string:email>")
def get_user(email):
    with open("user.json", "r") as file:
        data = json.load(file)

    return jsonify(data), 200


@app.route("/update_address", methods=["POST"])
def update_address():
    token = request.get_json()["token"]
    address = request.get_json()["address"]
    if token == "qwerty":
        response_data = {
            "message": "Registro correcto",
            "status": 200,
            "data": {
                "address": address,
            },
        }

        return jsonify(response_data), 200
    else:
        return "Error", 401


def allowed_file(filename):
    return (
        "." in filename
        and filename.rsplit(".", 1)[1].lower() in app.config["ALLOWED_EXTENSIONS"]
    )


@app.route("/update_photo", methods=["POST"])
def update_photo():
    try:
        file_data = request.json.get("fileBase64")
        if not file_data:
            return jsonify({"error": "No se recibió ningún archivo"}), 400
        file_data = file_data.split(",")[1]
        return (
            jsonify(
                {
                    "message": "Archivo subido exitosamente",
                }
            ),
            200,
        )
    except Exception as e:
        return jsonify({"error": f"Error al procesar el archivo: {str(e)}"}), 500


@app.route("/get_products")
def get_products():
    with open("books.json", "r") as file:
        data = json.load(file)

    return jsonify(data), 200


@app.route("/register_product", methods=["POST"])
def register_product():
    token = request.get_json()["token"]
    isbn = request.get_json()["isbn"]
    title = request.get_json()["title"]
    price = request.get_json()["price"]
    author = request.get_json()["author"]
    editor = request.get_json()["editor"]
    image = request.get_json()["image"]
    quantity = request.get_json()["quantity"]
    if token == "qwerty":
        return (
            jsonify(
                {
                    "message": "Creado exitosamente",
                    "data": {
                        "isbn": isbn,
                        "title": title,
                        "price": price,
                        "author": author,
                        "editor": editor,
                        "image": image,
                        "quantity": quantity,
                    },
                }
            ),
            201,
        )
    else:
        return "Error", 401


@app.route("/add_cart", methods=["POST"])
def add_cart():
    token = request.get_json()["token"]
    isbn = request.get_json()["isbn"]
    quantity = request.get_json()["quantity"]

    if token == "qwerty":
        response_data = {
            "message": "Compra correcta",
            "status": 200,
            "data": {
                "isbn": isbn,
                "quantity": quantity,
            },
        }

        return jsonify(response_data), 200
    else:
        return "Error", 401


@app.route("/get_cart/<string:email>")
def get_cart(email):
    with open("cart.json", "r") as file:
        data = json.load(file)

    return jsonify(data), 200


@app.route("/buy_cart/<string:email>", methods=["POST"])
def buy_cart(email):
    token = request.get_json()["token"]
    if token == "qwerty":
        response_data = {
            "message": "Compra correcta",
            "status": 200,
        }

        return jsonify(response_data), 200
    else:
        return "Error", 401


if __name__ == "__main__":
    app.run(debug=True)

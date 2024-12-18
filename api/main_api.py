from flask import Flask, request, Response, jsonify
from flask_cors import CORS
import json
import base64

app = Flask(__name__)

CORS(app)


@app.route("/signin", methods=["POST"])
def signin():
    email = request.get_json()["email"]
    password = request.get_json()["password"]
    if email == "test@gmail.com" and password == "123456":
        return Response('{"token": "qwerty", "status": 200}', status=200)
    else:
        return Response(
            '{"message": "Credenciales incorrectas", "status": 401}', status=401
        )


@app.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    response_data = {
        "message": "Registro correcto",
        "status": 201,
        "token": "123456",
        "data": {
            "name": name,
            "email": email,
            "password": password,
        },
    }

    return Response(json.dumps(response_data), status=201)


@app.route("/get_user/<string:email>")
def get_user(email):
    with open("user.json", "r") as file:
        data = json.load(file)

    json_data = json.dumps(data)

    return Response(json_data, status=200)


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

        return Response(json.dumps(response_data), status=200)
    else:
        return Response("Error", status=401)


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


@app.route("/get_books")
def get_books():
    with open("books.json", "r") as file:
        data = json.load(file)

    json_data = json.dumps(data)

    return Response(json_data, status=200)


@app.route("/register_book", methods=["POST"])
def register_book():
    token = request.get_json()["token"]
    isbn = request.get_json()["isbn"]
    title = request.get_json()["title"]
    price = request.get_json()["price"]
    author = request.get_json()["author"]
    editor = request.get_json()["editor"]
    image = request.get_json()["image"]
    quantity = request.get_json()["quantity"]
    if token == "qwerty":
        return Response(
            f"{isbn}, {title}, {price}, {author}, {editor}, {image}, {quantity} ok",
            status=200,
        )
    else:
        return Response("Error", status=401)


@app.route("/sell_book", methods=["POST"])
def sell_book():
    token = request.get_json()["token"]
    isbn = request.get_json()["isbn"]
    if token == "qwerty":
        return Response(f"{isbn} sell", status=200)
    else:
        return Response("Error", status=401)


if __name__ == "__main__":
    app.run(debug=True)

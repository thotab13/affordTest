from flask import Flask, request, jsonify
import requests
import time

app = Flask(__name__)

@app.route('/numbers', methods=['GET'])
def get_numbers():
    urls = request.args.getlist('url')
    merged_numbers = []

    for url in urls:
        try:
            response = requests.get(url, timeout=0.5)
            if response.status_code == 200:
                data = response.json()
                merged_numbers.extend(data['numbers'])
        except requests.exceptions.Timeout:
            pass  # Ignore timeouts
        except Exception as e:
            print(f"Error fetching data from {url}: {e}")

    merged_numbers = sorted(list(set(merged_numbers)))

    return jsonify(numbers=merged_numbers)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8008)

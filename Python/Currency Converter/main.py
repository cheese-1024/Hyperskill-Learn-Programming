import requests
import json

convertFrom = input().lower()
if convertFrom == " ":
    exit()
r = requests.get(f"http://www.floatrates.com/daily/{convertFrom}.json")
currency = json.loads(r.content)
cache = {}
if "usd" in currency:
    cache["usd"] = currency["usd"]["rate"]
if "eur" in currency:
    cache["eur"] = currency["eur"]["rate"]


while True:

    convertTo = str(input().lower())
    if not convertTo:
        break
    try:
        amt = float(input())
    except ValueError:
        break
    if not convertTo:
        break
    print("Checking the cache…")

    if convertTo in cache:
        print("Oh! It is in the cache!")
        print("You received", round(amt * cache[convertTo], 2), str(convertTo).upper() + ".")
    elif convertTo not in cache:
        print("Sorry, but it is not in the cache!")
        print("You received", round(amt * currency[convertTo]["rate"], 2), str(convertTo).upper() + ".")
        cache[convertTo] = currency[convertTo]["rate"]

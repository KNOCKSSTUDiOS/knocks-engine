import json

# CEO ACCESS ONLY - 0736 PIN
def handler(event, context):
    if event['httpMethod'] != "POST":
        return {"statusCode": 405, "body": "METHOD_NOT_ALLOWED"}

    # Verify CEO Identity via header
    auth = event.get("headers", {}).get("x-ceo-auth")
    if auth != "0736":
        return {"statusCode": 403, "body": "UNAUTHORIZED"}

    body = json.loads(event.get("body", "{}"))
    is_active = body.get("is_active", False)

    # In a live Netlify setup, this would toggle a 'Free_Access' flag in your DB
    return {
        "statusCode": 200,
        "body": json.dumps({
            "status": "SYNCED",
            "engine_state": "FREE_ACCESS" if is_active else "PAYWALL_ACTIVE"
        })
    }

curl -X POST \
    --data '{"hasMail": false, "mail": "", "subject": "", "message" : ""}' \
    -H "Content-Type: application/json" \
    http://localhost:8442/mail/
if [ "$1" == "prod" ]; then
    source .env.prod
else
    source .env.dev
fi

npm run dev
/* Replace with your SQL commands */

CREATE TABLE IF NOT EXISTS "telegram_bots" (
    id                  SERIAL PRIMARY KEY,
    telegram_bot_id     SERIAL UNIQUE,
    telegram_bot_token  VARCHAR(255) NOT NULL UNIQUE 
);

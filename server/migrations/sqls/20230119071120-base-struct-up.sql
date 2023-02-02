-- Таблица пользоватлей -- 
CREATE TABLE IF NOT EXISTS "bc_users" (
    "id"                UUID    PRIMARY KEY     NOT NULL,
    "login"             VARCHAR(24)     NOT NULL,  
    "password"          VARCHAR(150)     NOT NULL,
    "createdAt"         TIMESTAMP WITH TIME ZONE    DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"         TIMESTAMP WITH TIME ZONE    DEFAULT CURRENT_TIMESTAMP
);
COMMENT ON TABLE "bc_users" IS 'Таблица пользователей';
COMMENT ON COLUMN "bc_users"."id" IS 'Уникальный идентификатор пользователя';
COMMENT ON COLUMN "bc_users"."login" IS 'Логин пользователя';
COMMENT ON COLUMN "bc_users"."password" IS 'Пароль пользователя';
COMMENT ON COLUMN "bc_users"."createdAt" IS 'Время создания записи';
COMMENT ON COLUMN "bc_users"."updatedAt" IS 'Время обновления записи';

-- Таблица ролей пользователя --
CREATE TABLE IF NOT EXISTS "bc_roles" (
    "id"                UUID    PRIMARY KEY     NOT NULL,
    "user_id"           UUID    REFERENCES "bc_users"("id")     NOT NULL,
    "name"              VARCHAR(24)     NOT NULL    DEFAULT 'Not verifed user',
    "description"       VARCHAR(250)    NOT NULL    DEFAULT 'The user has not verifed their email',
    "permission_level"  INTEGER     NOT NULL    DEFAULT 1,
    "createdAt"         TIMESTAMP WITH TIME ZONE    DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"         TIMESTAMP WITH TIME ZONE    DEFAULT CURRENT_TIMESTAMP
);
COMMENT ON TABLE "bc_roles" IS 'Таблица ролей пользовталей';
COMMENT ON COLUMN "bc_roles"."id" IS 'Уникальный идентификатор роли';
COMMENT ON COLUMN "bc_roles"."user_id" IS 'Идентификатор пользователя';
COMMENT ON COLUMN "bc_roles"."name" IS 'Название роли';
COMMENT ON COLUMN "bc_roles"."description" IS 'Описание роли';
COMMENT ON COLUMN "bc_roles"."permission_level" IS 'Уровень полномочий';
COMMENT ON COLUMN "bc_roles"."createdAt" IS 'Время создания записи';
COMMENT ON COLUMN "bc_roles"."updatedAt" IS 'Время обновления записи';

-- Таблица информации о пользователях --
CREATE TABLE IF NOT EXISTs "bc_users_info" (
    "id"                UUID    PRIMARY KEY     NOT NULL,
    "user_id"           UUID    REFERENCES "bc_users"("id")     NOT NULL,
    "phone_number"      VARCHAR(15),
    "email"             VARCHAR(25),
    "createdAt"         TIMESTAMP WITH TIME ZONE    DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"         TIMESTAMP WITH TIME ZONE    DEFAULT CURRENT_TIMESTAMP
);
COMMENT ON TABLE "bc_users_info" IS 'Таблица ролей пользовталей';
COMMENT ON COLUMN "bc_users_info"."id" IS 'Уникальный идентификатор информации о пользователях';
COMMENT ON COLUMN "bc_users_info"."user_id" IS 'Идентификатор пользователя';
COMMENT ON COLUMN "bc_users_info"."phone_number" IS 'Номер телефона пользователя';
COMMENT ON COLUMN "bc_users_info"."email" IS 'Почта пользователя';
COMMENT ON COLUMN "bc_users_info"."createdAt" IS 'Время создания записи';
COMMENT ON COLUMN "bc_users_info"."updatedAt" IS 'Время обновления записи';

-- Таблица ботов -- 
CREATE TABLE IF NOT EXISTS "bc_telegram_bots" (
    "id"                UUID    PRIMARY KEY     NOT NULL,
    "user_id"           UUID    REFERENCES "bc_users"("id")     NOT NULL,
    "token"             VARCHAR(150)    NOT NULL,
    "config"            JSON   DEFAULT '{}',
    "createdAt"         TIMESTAMP WITH TIME ZONE    DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"         TIMESTAMP WITH TIME ZONE    DEFAULT CURRENT_TIMESTAMP
);
COMMENT ON TABLE "bc_telegram_bots" IS 'Таблица телеграм ботов';
COMMENT ON COLUMN "bc_telegram_bots"."id" IS 'Уникальный идентификатор бота';
COMMENT ON COLUMN "bc_telegram_bots"."user_id" IS 'Уникальный идентификатор пользователя, создателю бота';
COMMENT ON COLUMN "bc_telegram_bots"."token" IS 'Уникальный токен бота';
COMMENT ON COLUMN "bc_telegram_bots"."config" IS 'Конфигурация бота';
COMMENT ON COLUMN "bc_telegram_bots"."createdAt" IS 'Время создания записи';
COMMENT ON COLUMN "bc_telegram_bots"."updatedAt" IS 'Время обновления записи';
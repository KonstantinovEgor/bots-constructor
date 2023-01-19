-- Таблица ролей пользователя --
CREATE TABLE IF NOT EXISTS "bc_roles" (
    "id"                uuid    PRIMARY KEY     NOT NULL,
    "name"              VARCHAR(24)     NOT NULL,
    "description"       VARCHAR(250)    NOT NULL,
    "permission_level"  INTEGER     NOT NULL,
    "createdAt"         TIMESTAMP WITH TIME ZONE    DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"         TIMESTAMP WITH TIME ZONE    DEFAULT CURRENT_TIMESTAMP
);
COMMENT ON TABLE "bc_roles" IS 'Таблица ролей пользовталей';
COMMENT ON COLUMN "bc_roles"."id" IS 'Уникальный идентификатор роли';
COMMENT ON COLUMN "bc_roles"."name" IS 'Название роли';
COMMENT ON COLUMN "bc_roles"."description" IS 'Описание роли';
COMMENT ON COLUMN "bc_roles"."permission_level" IS 'Уровень полномочий';
COMMENT ON COLUMN "bc_roles"."createdAt" IS 'Время создания записи';
COMMENT ON COLUMN "bc_roles"."updatedAt" IS 'Время обновления записи';

-- Таблица пользоватлей -- 
CREATE TABLE IF NO EXISTS "bc_users" (
    "id"                uuid    PRIMARY KEY     NOT NULL,
    "login"             VARCHAR(24)     NOT NULL, 
    "role_id"           uuid    REFERENCES "bc_roles"("id")     NOT NULL, 
    "password"          VARCHAR(24)     NOT NULL,
    "createdAt"         TIMESTAMP WITH TIME ZONE    DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"         TIMESTAMP WITH TIME ZONE    DEFAULT CURRENT_TIMESTAMP
);
COMMENT ON TABLE "bc_users" IS 'Таблица пользователей';
COMMENT ON COLUMN "bc_users"."id" IS 'Уникальный идентификатор пользователя';
COMMENT ON COLUMN "bc_users"."login" IS 'Логин пользователя';
COMMENT ON COLUMN "bc_users"."role_id" IS 'Уникальный идентификатор роли пользователя';
COMMENT ON COLUMN "bc_users"."password" IS 'Пароль пользователя';
COMMENT ON COLUMN "bc_users"."createdAt" IS 'Время создания записи';
COMMENT ON COLUMN "bc_users"."updatedAt" IS 'Время обновления записи';
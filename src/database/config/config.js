require('dotenv').config();

module.exports = {
  production: {
    username: "esloctaru",
    password: "#H0864#@",
    database: "lost_f",
    host: "45.174.40.217",
    dialect: "mysql",
    define: {
      timestamps: true,
      underscored: false,
      freezeTableName: true
    }
  }, 
  development: {
    username: "esloctaru",
    password: "#H0864#@",
    database: "lost",
    host: process.env.PROD_DB_HOST,
    dialect: "mysql",
    define: {
      timestamps: true,
      underscored: false,
      freezeTableName: true
    }
  },
  local: {
    username: "3conn",
    password: "$2a$12$fDM90eiqN5gXQfJAAecPFOzplJnPnp5I9TgI174r2Rh3LYsoyJ4Hm",
    database: "lost",
    host: "localhost",
    dialect: "mysql",
    define: {
      timestamps: true,
      underscored: false,
      freezeTableName: true
    }
  },
  test: {
    username: "3conn",
    password: "$2a$12$fDM90eiqN5gXQfJAAecPFOzplJnPnp5I9TgI174r2Rh3LYsoyJ4Hm",
    database: "smart_test",
    host: "localhost",
    dialect: "mysql",
    define: {
      timestamps: true,
      underscored: false,
      freezeTableName: true
    }
  }
}
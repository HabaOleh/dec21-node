module.exports={
    PORT:5000,
    MONGO_URL: 'mongodb://localhost:27017/dec-2021',
    PASSWORD_REGEX: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[#?!@$%^&*-]).{8,}$/,
    EMAIL_REGEX: /^([^.@]+)(\.[^.@]+)*@([^.@]+\.)+([^.@]+)$/,
}

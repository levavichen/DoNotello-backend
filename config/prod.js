
// export default {
//     dbURL: 'mongodb+srv://theUser:thePass@cluster0-klgzh.mongodb.net/test?retryWrites=true&w=majority',
//     dbName: process.env.DB_NAME || 'board_db'
// }

export default {
  dbURL: process.env.MONGO_URL || 'mongodb+srv://levavichen:chen@donotello.4yvmn.mongodb.net/?retryWrites=true&w=majority&appName=DoNotello',
  dbName : process.env.DB_NAME || 'DoNotello_db'
}


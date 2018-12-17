import Mongoose from 'mongoose';

function init() {
  return Mongoose.connect(
    'mongodb://127.0.0.1:32768/admin',
    {
      promiseLibrary: global.Promise,
      useNewUrlParser: true
    }
  );
}

module.exports = {
  init,
  instance: mongoose
};

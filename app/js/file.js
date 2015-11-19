var fs = require('fs');

// TODO: utiliser directement fs dans le code => ce js est à supprimer
module.exports = {
    read: function (path, callback) {
        fs.readFile(path, 'utf8', function (err,data) {
            if (err) {
                return console.error(err);
            } else if (typeof callback === 'function') {
                callback(data, path);
            }
        });
    },
    write: function (data, path, callback) {
        fs.writeFile(path, data, function (err) {
            if (err) {
                return console.error(err);
            } else if (typeof callback === 'function') {
                callback();
            }
        });
    },
    existsSync: function (path) {
        return fs.existsSync(path);
    }
};
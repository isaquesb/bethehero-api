const index = (data, cb) => {
    const resultSet = [];
    data.forEach((row) => {
        resultSet.push(cb(row));
    });
    return resultSet;
};

module.exports = index;

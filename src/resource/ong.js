const cb = (data) => {
    return {
        id: data.id,
        name: data.name,
        cellphone: data.cellphone,
        email: data.email,
        city: data.city,
        uf: data.uf,
        created_at: data.created_at ? new Date(data.created_at) : undefined
    }
};

module.exports = cb;

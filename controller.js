module.exports {
    getPlanes: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_planes().then(planes => {
            res.status(200).send(planes);
        })
        .catch(err => { 
            console.log(err);
            res.status(500).send(err);
        });
    },





}
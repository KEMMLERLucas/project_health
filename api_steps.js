const http = require('http');
const host = "localhost";
const port = 8000;

let steps = {
    "data": [
    {
        "id": 1,
        "steps": 340,
        "people_id": "00657896-d299-48a7-8a41-aae1c2b4f606"
    },
    {
        "id": 2,
        "steps": 6000,
        "people_id": "03267270-c67d-41c2-97f5-daeca0474952"
    },
    {
        "id": 3,
        "steps": 1227,
        "people_id": "03f2487e-eda1-43c0-851d-cbeb8b86a922"
    },
    {
        "id": 4,
        "steps": 536,
        "people_id": "08f55531-0065-4595-88c5-3a815143ff56"
    },
    {
        "id": 5,
        "steps": 4571,
        "people_id": "0a5c626f-b7c3-423f-97ed-4ddc1b9a189b"
    },
    {
        "id": 6,
        "steps": 929,
        "people_id": "0b67e888-3bf1-468c-8223-46c1a47d3862"
    },
    {
        "id": 7,
        "steps": 9276,
        "people_id": "0f2cf735-9cb0-475d-928c-caae64b99b8c"
    },
    {
        "id": 8,
        "steps": 14,
        "people_id": "0f4d0a37-5f59-4ec9-a35d-854f56689900"
    },
    {
        "id": 9,
        "steps": 7263,
        "people_id": "101a97b8-806c-4cc5-b5c6-0f86cf98ce49"
    },
    {
        "id": 10,
        "steps": 272,
        "people_id": "13bebeed-d63a-45ed-8c85-d1d66146d4a7"
    },
    {
        "id": 11,
        "steps": 1526,
        "people_id": "187957d3-dedd-4dbe-b91a-c1805a622545"
    },
    {
        "id": 12,
        "steps": 1625,
        "people_id": "1a5470e1-d489-4094-aa82-b77f2c7f0eea"
    },
    {
        "id": 13,
        "steps": 7162,
        "people_id": "207149e4-fc20-47e3-829b-4fe2fa58a031"
    },
    {
        "id": 14,
        "steps": 15,
        "people_id": "2075b286-4129-4249-9967-091882a5e0bc"
    },
    {
        "id": 15,
        "steps": 2736,
        "people_id": "20dc6044-341c-4acf-a5ad-efce3bc7a82e"
    },
    {
        "id": 16,
        "steps": 817,
        "people_id": "20e42721-5413-4e00-b4f7-9e7f8ff64d80"
    },
    {
        "id": 17,
        "steps": 8262,
        "people_id": "2163445f-94fe-4ab7-92c1-bf702aad4533"
    },
    {
        "id": 18,
        "steps": 2635,
        "people_id": "2b0a3408-8905-4708-bdcc-527bec518b26"
    },
    {
        "id": 19,
        "steps": 5996,
        "people_id": "2c8c3e53-ff5c-4d65-bc1b-28b99132c292"
    },
    {
        "id": 20,
        "steps": 1422,
        "people_id": "2d4c8cfd-5ef5-40c7-ab1c-13d3966fa326"
    },
    {
        "id": 21,
        "steps": 4726,
        "people_id": "2ddd9e76-5744-4eeb-891e-386fa2a6b9e1"
    },
    {
        "id": 22,
        "steps": 3726,
        "people_id": "2ff6df6c-074b-425f-977e-ac113c3a905c"
    },
    {
        "id": 23,
        "steps": 1826,
        "people_id": "339a4da6-fb55-493e-9890-062ec153c1f2"
    },
    {
        "id": 24,
        "steps": 5261,
        "people_id": "361b62d7-3a4c-4c73-9101-876cf34400bf"
    },
    {
        "id": 25,
        "steps": 8273,
        "people_id": "3787e5f3-28c3-42d2-a512-a4e7405e5422"
    },
    {
        "id": 26,
        "steps": 927,
        "people_id": "3b227cb0-4639-446d-81c7-65fc77e88528"
    },
    {
        "id": 27,
        "steps": 4352,
        "people_id": "489faada-e2ed-443b-9218-3952109537c3"
    },
    {
        "id": 28,
        "steps": 1625,
        "people_id": "4ef91bc3-a582-477b-a133-20c6ae221962"
    },
    {
        "id": 29,
        "steps": 3251,
        "people_id": "534c8abd-8e3e-4893-9b14-978c625c104b"
    },
    {
        "id": 30,
        "steps": 1083,
        "people_id": "552607e4-e081-462f-bd32-4f70a7e6e462"
    },
]
};

const requestSteps = function(req, res) {
    if (req.url === "/steps" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(steps));
    } else {
        res.writeHead(404);
        res.end("Not Found");
    }
};

const server = http.createServer(requestSteps);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

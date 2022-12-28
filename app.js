const io = require("socket.io")(3000, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("");
  console.log("새로운 소켓이 연결됐어요!");

  socket.send("Hello!");

  socket.emit(
    "client_1",
    "client_1님 어서오세요",
    "client_1님은 VIP입니다",
    (response) => {
      console.log("response:", response);
    }
  );
  socket.emit("client_2", "client_2님 어서오세요");

  socket.on("message", (data) => {
    console.log(data);
  });
});

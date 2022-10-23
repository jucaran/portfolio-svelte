
export async function post({ request }: any) {
  console.log("request: ", request)
  return {
    status: 200,
    body: "OK"
  }
}

export async function get({ request }: any) {
  console.log("request: ", request)
  return {
    status: 200,
    body: "OK"
  }
}
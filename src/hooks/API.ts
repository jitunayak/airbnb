export class API {
  private BASE_URL = "https://airbnb.deno.dev/api/v1";

  jsonHeader = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    return myHeaders;
  };

  async delete(url: string, body: unknown): Promise<unknown> {
    return (
      await fetch(`${this.BASE_URL}${url}`, {
        body: JSON.stringify(body),
        headers: this.jsonHeader(),
        method: "DELETE",
      })
    ).json();
  }
  async get(url: string): Promise<unknown> {
    return (await fetch(`${this.BASE_URL}${url}`)).json();
  }

  async patch(url: string, body: unknown): Promise<unknown> {
    return (
      await fetch(`${this.BASE_URL}${url}`, {
        body: JSON.stringify(body),
        headers: this.jsonHeader(),
        method: "PATCH",
      })
    ).json();
  }
  async post(url: string, body: unknown): Promise<unknown> {
    return (
      await fetch(`${this.BASE_URL}${url}`, {
        body: JSON.stringify(body),
        headers: this.jsonHeader(),
        method: "POST",
      })
    ).json();
  }
}

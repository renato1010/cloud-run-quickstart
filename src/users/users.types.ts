type User = {
  name: string;
  age: number;
};
type UserPostBody = User;
type UserGetResponseOK = {
  data: User[];
  ok: true;
};
type UserGetResponseError = {
  error: { message: "Error getting users list"; ok: false };
};
type UserGetResponse = UserGetResponseOK | UserGetResponseError;
export { User, UserGetResponse, UserPostBody };

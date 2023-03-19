import axiosInstance from "../../common/api/axiosInstance";

export async function fetchAllTodos() {
  return await axiosInstance.get();
}

export async function postComplete(id) {
  return await axiosInstance.post(`${id}/complete`);
}

export async function postUncomplete(id) {
  return await axiosInstance.post(`${id}/uncomplete`);
}

export async function deleteById(id) {
  return await axiosInstance.delete(`${id}`);
}

export async function postCreate(name) {
  return await axiosInstance.post("", { name });
}

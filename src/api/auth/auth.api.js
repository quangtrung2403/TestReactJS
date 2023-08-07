import { getToken } from "./helper";
import { axiosInstance } from "@/api/sdk";
import { routers } from "../router";
import queryString from 'query-string';

export const apiLogin = (data) =>
  axiosInstance
    .post(`api/web-authenticate`, {
      password: data.password,
      username: data.username,
    })
    .then((res) => res.data);
export const apiGetMe = () =>
  axiosInstance
    .get("api/me", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
    .then((res) => res.data.user);

export const apiLogout = () =>
  axiosInstance
    .post(
      "api/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    )
    .then((res) => res.data);

export const apiGetUser = async (page, itemsPerPage, sort, input) => {
  const queryParams = queryString.stringify(
    {
      paginate: true,
      page,
      itemsPerPage,
      sort,
      search: input,
    },
    {
      encode: false,
    }
  );

  try {
    const response = await axiosInstance.get(`${routers.listQuankhu}?${queryParams}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Gọi Api không thành công', error);
    throw error;
  }
};

export const createNewQuankhu = async (data, geometry) => {
  const postData = {
    name: data.name,
    code: data.code,
    description: data.description,
    geometry: geometry,
  };
  axiosInstance
    .post(routers.createNewQuankhu, postData, { headers: { Authorization: `Bearer ${getToken()}` } })
    .then(response => response.data)
    .catch(error => {
      return error
    });
}

export const updateQuankhu = async (id, data, geometry) => {
  const updateData = {
    name: data.name,
    code: data.code,
    description: data.description,
    geometry: geometry,
    id: id,
  };
  axiosInstance
    .put(`${routers.updateQuankhu}/${id}`, updateData, { headers: { Authorization: `Bearer ${getToken()}` } })
    .then(response => response.data)
    .catch(error => {
      return error
    });
}

export const deleteQuankhu = (id) => {
  axiosInstance
    .delete(`${routers.deleteQuankhu}/${id}`, { headers: { Authorization: `Bearer ${getToken()}` } })
    .then(response => response.data)
    .catch(error => {
      return error
    });
}

export const getmapQuankhu = async () => {
  try {
    const response = await axiosInstance.get('api/militaries?showGeometry=true');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// lấy map quan khu muốn update danh sách
export const getQuanKhuid = async (id) => {
  axiosInstance
    .get(`${routers.updateQuankhu}/${id}`, { headers: { Authorization: `Bearer ${getToken()}` } })
    .then(response => response.data)
    .catch(error => {
      return error
    });
}
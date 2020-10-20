// 模拟获取接口数据
import instance from "./request";

export const getAllMood = () => {
  return instance({
    url: "/blogData/mood",
    method: "get",
  });
};

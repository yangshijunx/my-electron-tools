// 获取当前设备cpu gpu 内存 等信息
import si from "systeminformation";

async function getDeviceInfo() {
  let res = await si.cpu();
  return res;
}

export default getDeviceInfo;

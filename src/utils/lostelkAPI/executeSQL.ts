import request from "@/plugins/request";

// eslint-disable-next-line
export function executeSQL(sql: any) {
  return request({
    url: "executeSQL",
    method: "post",
    data: sql,
  });
}

import httpRepository from "~core/http";
import {{pascalCase name}}Entity from "./entity";

// API GET 
export const getList{{ pascalCase name }} = async (params: any): Promise<{data:{{pascalCase name}}Entity[], info:any}> => {
  return await httpRepository.execute({
    path: '/api/{{name}}',
    showSuccess: false,
    showError: false,
    params,
    convert: (res) => {
      return {
        data: {{pascalCase name}}Entity.createList{{pascalCase name}}(res?.pagedData),
        info: res?.pageInfo
      };
    }
  });
};
  //and get detail
export const getDetail{{pascalCase name}} = async (id:string):Promise<{{pascalCase name}}Entity> => {
  return await httpRepository.execute({
    path: '/api/{{name}}/' + id,
    showSuccess: false,
    showError: false,
    convert: (res) => {
      return new {{pascalCase name}}Entity(res);
    }
  });
};


//API ADD
export const add{{pascalCase name}} = async (payload:any) => {
  return await httpRepository.execute({
    path: '/api/{{name}}',
    method: "post",
    payload
  })
}


//API EDIT/UPDATE
export const edit{{pascalCase name}} = async (id:string, payload:any) => {
  return await httpRepository.execute({
    path: '/api/{{name}}/' + id,
    method: "put",
    payload
  })
}


//API DELETE
export const delete{{pascalCase name}} = async (id:string) => {
  return await httpRepository.execute({
    path: '/api/{{name}}/' + id,
    method: "delete",
  });
};

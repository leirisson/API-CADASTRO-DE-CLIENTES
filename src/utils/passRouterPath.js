

export function passRouterPath(path){
    const routerParamsRegex = /:([a-zA-Z0-9_]+)/g


    const params = path.replaceAll(routerParamsRegex, "(?<$1>[0-9a-fA-F-]{36}|[a-z0-9_]+)")

    const pathRegex = new RegExp(`^${params}(?<query>\\?(.*))?$`)


    return pathRegex
}
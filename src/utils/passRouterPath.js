

export function passRouterPath(path){
    const routerParamsRegex = /:([a-zA-Z0-9]+)/g

    const params = path.replaceAll(routerParamsRegex, "(?<$1>[0-9a-zA-Z-]+)")

    const pathRegex = new RegExp(`^${params}(?<query>\\?(.*))?$`)


    return pathRegex
}
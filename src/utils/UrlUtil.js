export default class UrlUtil {
  static getParams(value) {
    if (typeof URLSearchParams === "undefined") {
      return fallbackGetUrlParameter(value);
    }
    if (
      typeof window !== "undefined" &&
      typeof window.navigator !== "undefined"
    ) {
      return new URLSearchParams(window.location.search).get(value);
    }
  }

  static getProjectIDFromNameId(projectName) {
    const projectNameArr = projectName.split("-");
    return projectNameArr[projectNameArr.length - 1];
  }
}

function fallbackGetUrlParameter(param) {
  const name = param.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  const regex = new RegExp(`[\\?&]${name}=([^&#]*)`);
  const results =
    typeof window !== "undefined" && typeof window.navigator !== "undefined"
      ? regex.exec(window.location.search)
      : "";
  this.urlParams =
    results === null
      ? null
      : decodeURIComponent(results[1].replace(/\+/g, " "));
}

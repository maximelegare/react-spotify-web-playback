var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/index.tsx
import React22, { createRef, PureComponent } from "react";
import isEqual from "@gilbarbara/deep-equal";
import memoize from "memoize-one";

// src/components/Actions.tsx
import React, { memo } from "react";

// src/modules/styled.tsx
import { createElement } from "react";
import { create } from "nano-css";
import { addon as addonJSX } from "nano-css/addon/jsx.js";
import { addon as addonKeyframes } from "nano-css/addon/keyframes.js";
import { addon as addonNesting } from "nano-css/addon/nesting.js";
import { addon as addonRule } from "nano-css/addon/rule.js";
import { addon as addonStyle } from "nano-css/addon/style.js";
import { addon as addonStyled } from "nano-css/addon/styled.js";
import {} from "nano-css";
var nano = create({ h: createElement });
addonRule(nano);
addonKeyframes(nano);
addonJSX(nano);
addonStyle(nano);
addonStyled(nano);
addonNesting(nano);
var { keyframes, put, styled } = nano;
var px = (value) => typeof value === "number" ? `${value}px` : value;

// src/components/Actions.tsx
var Wrapper = styled("div")(
  {
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-end",
    "pointer-events": "none"
  },
  ({ style }) => {
    let styles = {
      bottom: 0,
      position: "absolute",
      right: 0,
      width: "auto"
    };
    if (style.layout === "responsive") {
      styles = {
        "@media (max-width: 767px)": styles,
        "@media (min-width: 768px)": {
          height: px(style.h)
        }
      };
    }
    return {
      height: px(32),
      ...styles
    };
  },
  "ActionsRSWP"
);
function Actions(props) {
  const { children, layout, styles } = props;
  return /* @__PURE__ */ React.createElement(Wrapper, { "data-component-name": "Actions", style: { h: styles.height, layout } }, children);
}
var Actions_default = memo(Actions);

// src/components/Controls.tsx
import React3, { memo as memo3 } from "react";

// src/components/Slider.tsx
import React2, { memo as memo2 } from "react";
import RangeSlider from "@gilbarbara/react-range-slider";

// src/modules/helpers.ts
function convertTrack(track) {
  const { album, artists, duration_ms, id, name, uri } = track;
  return {
    artists,
    durationMs: duration_ms,
    id: id ?? "",
    image: getAlbumImage(album),
    name,
    uri
  };
}
function getAlbumImage(album) {
  const maxWidth = Math.max(...album.images.map((d) => d.width || 0));
  return album.images.find((d) => d.width === maxWidth)?.url || "";
}
function isNumber(value) {
  return typeof value === "number";
}
function loadSpotifyPlayer() {
  return new Promise((resolve, reject) => {
    const scriptTag = document.getElementById("spotify-player");
    if (!scriptTag) {
      const script = document.createElement("script");
      script.id = "spotify-player";
      script.type = "text/javascript";
      script.async = false;
      script.defer = true;
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.onload = () => resolve();
      script.onerror = (error) => reject(new Error(`loadScript: ${error.message}`));
      document.head.appendChild(script);
    } else {
      resolve();
    }
  });
}
function millisecondsToTime(input) {
  const seconds = Math.floor(input / 1e3 % 60);
  const minutes = Math.floor(input / (1e3 * 60) % 60);
  const hours = Math.floor(input / (1e3 * 60 * 60) % 24);
  const parts = [];
  if (hours > 0) {
    parts.push(
      `${hours}`.padStart(2, "0"),
      `${minutes}`.padStart(2, "0"),
      `${seconds}`.padStart(2, "0")
    );
  } else {
    parts.push(`${minutes}`, `${seconds}`.padStart(2, "0"));
  }
  return parts.join(":");
}
function parseVolume(value) {
  if (!isNumber(value)) {
    return 1;
  }
  if (value > 1) {
    return value / 100;
  }
  return value;
}
function round(number, digits = 2) {
  const factor = 10 ** digits;
  return Math.round(number * factor) / factor;
}
function validateURI(input) {
  const validTypes = ["album", "artist", "playlist", "show", "track"];
  if (input && input.indexOf(":") > -1) {
    const [key, type, id] = input.split(":");
    if (key === "spotify" && validTypes.indexOf(type) >= 0 && id.length === 22) {
      return true;
    }
  }
  return false;
}

// src/components/Slider.tsx
var Wrapper2 = styled("div")(
  {
    alignItems: "center",
    display: "flex",
    fontSize: px(12),
    transition: "height 0.3s",
    zIndex: 10
  },
  ({ style }) => ({
    '[class^="rswp_"]': {
      color: style.c,
      lineHeight: 1,
      minWidth: px(32)
    },
    ".rswp_progress": {
      textAlign: "right"
    },
    ".rswp_duration": {
      textAlign: "left"
    }
  }),
  "SliderRSWP"
);
function Slider(props) {
  const { durationMs, isMagnified, onChangeRange, onToggleMagnify, position, progressMs, styles } = props;
  const handleChangeRange = async ({ x }) => {
    onChangeRange(x);
  };
  const handleSize = styles.sliderHeight + 6;
  return /* @__PURE__ */ React2.createElement(
    Wrapper2,
    {
      "data-component-name": "Slider",
      "data-position": position,
      onMouseEnter: onToggleMagnify,
      onMouseLeave: onToggleMagnify,
      style: {
        c: styles.color,
        sliderHeight: styles.sliderHeight
      }
    },
    /* @__PURE__ */ React2.createElement("div", { className: "rswp_progress", style: { fontFamily: styles.sliderDurationFontFamily, fontSize: styles.sliderDurationFontSize } }, millisecondsToTime(progressMs)),
    /* @__PURE__ */ React2.createElement(
      RangeSlider,
      {
        axis: "x",
        className: "slider",
        "data-component-name": "progress-bar",
        onChange: handleChangeRange,
        styles: {
          options: {
            thumbBorder: 0,
            thumbBorderRadius: styles.sliderHandleBorderRadius,
            thumbColor: styles.sliderHandleColor,
            thumbSize: isMagnified ? handleSize + 4 : handleSize,
            height: isMagnified ? styles.sliderHeight + 4 : styles.sliderHeight,
            padding: "0px 13px",
            rangeColor: styles.sliderColor,
            trackBorderRadius: styles.sliderTrackBorderRadius,
            trackColor: styles.sliderTrackColor,
            width: "100%"
          }
        },
        x: position,
        xMax: 100,
        xMin: 0,
        xStep: 0.1
      }
    ),
    /* @__PURE__ */ React2.createElement("div", { className: "rswp_duration", style: { fontFamily: styles.sliderDurationFontFamily, fontSize: styles.sliderDurationFontSize } }, millisecondsToTime(durationMs))
  );
}
var Slider_default = memo2(Slider);

// src/components/Controls.tsx
function Controls(props) {
  const {
    // devices,
    durationMs,
    // isExternalDevice,
    isMagnified,
    // isPlaying,
    // layout,
    // locale,
    // nextTracks,
    onChangeRange,
    // onClickNext,
    // onClickPrevious,
    // onClickTogglePlay,
    onToggleMagnify,
    position,
    // previousTracks,
    progressMs,
    styles
    // volume,
  } = props;
  return /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement(
    Slider_default,
    {
      durationMs,
      isMagnified,
      onChangeRange,
      onToggleMagnify,
      position,
      progressMs,
      styles
    }
  ));
}
var Controls_default = memo3(Controls);
{
}

// src/components/Devices.tsx
import React9, { useCallback, useState } from "react";

// src/components/ClickOutside.tsx
import React4, { memo as memo4, useEffect, useRef } from "react";
function ClickOutside(props) {
  const { children, isActive, onClick, ...rest } = props;
  const containerRef = useRef(null);
  const isTouch = useRef(false);
  const handleClick = useRef((event) => {
    const container = containerRef.current;
    if (event.type === "touchend") {
      isTouch.current = true;
    }
    if (event.type === "click" && isTouch.current) {
      return;
    }
    if (container && !container.contains(event.target)) {
      onClick();
    }
  });
  useEffect(() => {
    const { current } = handleClick;
    if (isActive) {
      document.addEventListener("touchend", current, true);
      document.addEventListener("click", current, true);
    }
    return () => {
      document.removeEventListener("touchend", current, true);
      document.removeEventListener("click", current, true);
    };
  }, [isActive]);
  return /* @__PURE__ */ React4.createElement("div", { ref: containerRef, ...rest }, children);
}
var ClickOutside_default = memo4(ClickOutside);

// src/components/icons/Devices.tsx
import React5 from "react";
function DevicesIcon(props) {
  return /* @__PURE__ */ React5.createElement("svg", { height: "1em", preserveAspectRatio: "xMidYMid", viewBox: "0 0 64 64", width: "1em", ...props }, /* @__PURE__ */ React5.createElement(
    "path",
    {
      d: "M57 4c3.864 0 7 3.136 7 7v42a7 7 0 0 1-7 7H31a7 7 0 0 1-7-7V11c0-3.864 3.136-7 7-7h26ZM16 54v6H8v-6h8Zm41-44H31a1 1 0 0 0-1 1v42a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1ZM44 32a8 8 0 1 1 0 16 8 8 0 0 1 0-16ZM16 4v6H7a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h9v6H7a7 7 0 0 1-7-7V11c0-3.864 3.136-7 7-7h9Zm28 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z",
      fill: "currentColor"
    }
  ));
}

// src/components/icons/DevicesComputer.tsx
import React6 from "react";
function DevicesComputerIcon(props) {
  return /* @__PURE__ */ React6.createElement("svg", { height: "1em", preserveAspectRatio: "xMidYMid", viewBox: "0 0 64 64", width: "1em", ...props }, /* @__PURE__ */ React6.createElement(
    "path",
    {
      d: "M7.226 10.323a7.228 7.228 0 0 1 7.226-7.226h35.096a7.228 7.228 0 0 1 7.226 7.226V37.16a7.226 7.226 0 0 1-7.226 7.226H14.452a7.226 7.226 0 0 1-7.226-7.226V10.323Zm7.226-1.033c-.57 0-1.033.462-1.033 1.033V37.16c0 .57.463 1.033 1.033 1.033h35.096c.57 0 1.033-.463 1.033-1.033V10.323c0-.57-.463-1.033-1.033-1.033H14.452ZM0 57.806a3.097 3.097 0 0 1 3.097-3.096h57.806a3.097 3.097 0 0 1 0 6.193H3.097A3.097 3.097 0 0 1 0 57.806Z",
      fill: "currentColor"
    }
  ));
}

// src/components/icons/DevicesMobile.tsx
import React7 from "react";
function DevicesMobileIcon(props) {
  return /* @__PURE__ */ React7.createElement("svg", { height: "1em", preserveAspectRatio: "xMidYMid", viewBox: "0 0 64 64", width: "1em", ...props }, /* @__PURE__ */ React7.createElement(
    "path",
    {
      d: "M44.8 0a9.6 9.6 0 0 1 9.6 9.6v44.8a9.6 9.6 0 0 1-9.6 9.6H19.2a9.6 9.6 0 0 1-9.6-9.6V9.6A9.6 9.6 0 0 1 19.2 0h25.6Zm0 6.4H19.2A3.2 3.2 0 0 0 16 9.6v44.8a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V9.6a3.2 3.2 0 0 0-3.2-3.2ZM32 43.2a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z",
      fill: "currentColor"
    }
  ));
}

// src/components/icons/DevicesSpeaker.tsx
import React8 from "react";
function DevicesSpeakerIcon(props) {
  return /* @__PURE__ */ React8.createElement("svg", { height: "1em", preserveAspectRatio: "xMidYMid", viewBox: "0 0 64 64", width: "1em", ...props }, /* @__PURE__ */ React8.createElement(
    "path",
    {
      d: "M45 4c3.864 0 7 3.136 7 7v42a7 7 0 0 1-7 7H19a7 7 0 0 1-7-7V11c0-3.864 3.136-7 7-7h26Zm0 6H19a1 1 0 0 0-1 1v42a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1ZM32 32a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0-16a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z",
      fill: "currentColor"
    }
  ));
}

// src/components/Devices.tsx
var Wrapper3 = styled("div")(
  {
    "pointer-events": "all",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    zIndex: 20,
    "> div": {
      backgroundColor: "#000",
      borderRadius: px(8),
      color: "#fff",
      filter: "drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.5))",
      fontSize: px(14),
      padding: px(16),
      position: "absolute",
      textAlign: "left",
      "> p": {
        fontWeight: "bold",
        marginBottom: px(8),
        marginTop: px(16),
        whiteSpace: "nowrap"
      },
      button: {
        alignItems: "center",
        display: "flex",
        whiteSpace: "nowrap",
        "&:not(:last-of-type)": {
          marginBottom: px(12)
        },
        span: {
          display: "inline-block",
          marginLeft: px(4)
        }
      },
      "> span": {
        background: "transparent",
        borderLeft: `6px solid transparent`,
        borderRight: `6px solid transparent`,
        content: '""',
        display: "block",
        height: 0,
        position: "absolute",
        width: 0
      }
    },
    "> button": {
      alignItems: "center",
      display: "flex",
      fontSize: px(24),
      height: px(32),
      justifyContent: "center",
      width: px(32)
    }
  },
  ({ style }) => {
    const isCompact = style.layout === "compact";
    const divStyles = isCompact ? {
      bottom: "120%",
      left: 0
    } : {
      [style.p]: "120%",
      left: 0,
      "@media (min-width: 768px)": {
        left: "auto",
        right: 0
      }
    };
    const spanStyles = isCompact ? {
      bottom: `-${px(6)}`,
      borderTop: `6px solid #000`,
      left: px(10)
    } : {
      [style.p === "top" ? "border-bottom" : "border-top"]: `6px solid #000`,
      [style.p]: "-6px",
      left: px(10),
      "@media (min-width: 768px)": {
        left: "auto",
        right: px(10)
      }
    };
    return {
      "> button": {
        color: style.c
      },
      "> div": {
        ...divStyles,
        "> span": spanStyles
      }
    };
  },
  "DevicesRSWP"
);
var ListHeader = styled("div")({
  p: {
    whiteSpace: "nowrap",
    "&:nth-of-type(1)": {
      fontWeight: "bold",
      marginBottom: px(8)
    },
    "&:nth-of-type(2)": {
      alignItems: "center",
      display: "flex",
      span: {
        display: "inline-block",
        marginLeft: px(4)
      }
    }
  }
});
function getDeviceIcon(type) {
  if (type.toLowerCase().includes("speaker")) {
    return /* @__PURE__ */ React9.createElement(DevicesSpeakerIcon, null);
  }
  if (type.toLowerCase().includes("computer")) {
    return /* @__PURE__ */ React9.createElement(DevicesComputerIcon, null);
  }
  return /* @__PURE__ */ React9.createElement(DevicesMobileIcon, null);
}
function Devices(props) {
  const {
    currentDeviceId,
    deviceId,
    devices,
    layout,
    locale,
    onClickDevice,
    open,
    playerPosition,
    styles: { color }
  } = props;
  const [isOpen, setOpen] = useState(open);
  const handleClickSetDevice = (event) => {
    const { dataset } = event.currentTarget;
    if (dataset.id) {
      onClickDevice(dataset.id);
      setOpen(false);
    }
  };
  const handleClickToggleList = useCallback(() => {
    setOpen((s) => !s);
  }, []);
  const { currentDevice, otherDevices } = devices.reduce(
    (acc, device) => {
      if (device.id === currentDeviceId) {
        acc.currentDevice = device;
      } else {
        acc.otherDevices.push(device);
      }
      return acc;
    },
    { currentDevice: null, otherDevices: [] }
  );
  let icon = /* @__PURE__ */ React9.createElement(DevicesIcon, null);
  if (deviceId && currentDevice && currentDevice.id !== deviceId) {
    icon = getDeviceIcon(currentDevice.type);
  }
  return /* @__PURE__ */ React9.createElement(ClickOutside_default, { isActive: isOpen, onClick: handleClickToggleList }, /* @__PURE__ */ React9.createElement(
    Wrapper3,
    {
      "data-component-name": "Devices",
      "data-device-id": currentDeviceId,
      style: {
        c: color,
        layout,
        p: playerPosition
      }
    },
    !!devices.length && /* @__PURE__ */ React9.createElement(React9.Fragment, null, isOpen && /* @__PURE__ */ React9.createElement("div", null, currentDevice && /* @__PURE__ */ React9.createElement(ListHeader, null, /* @__PURE__ */ React9.createElement("p", null, locale.currentDevice), /* @__PURE__ */ React9.createElement("p", null, getDeviceIcon(currentDevice.type), /* @__PURE__ */ React9.createElement("span", null, currentDevice.name))), !!otherDevices.length && /* @__PURE__ */ React9.createElement(React9.Fragment, null, /* @__PURE__ */ React9.createElement("p", null, locale.otherDevices), otherDevices.map((device) => /* @__PURE__ */ React9.createElement(
      "button",
      {
        key: device.id,
        "aria-label": device.name,
        "data-id": device.id,
        onClick: handleClickSetDevice,
        type: "button"
      },
      getDeviceIcon(device.type),
      /* @__PURE__ */ React9.createElement("span", null, device.name)
    ))), /* @__PURE__ */ React9.createElement("span", null)), /* @__PURE__ */ React9.createElement(
      "button",
      {
        "aria-label": locale.devices,
        onClick: handleClickToggleList,
        title: locale.devices,
        type: "button"
      },
      icon
    ))
  ));
}

// src/components/ErrorMessage.tsx
import React10 from "react";
var Wrapper4 = styled("div")(
  {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "100%"
  },
  ({ style }) => ({
    backgroundColor: style.bgColor,
    borderTop: `1px solid ${style.errorColor}`,
    color: style.errorColor,
    height: px(style.h)
  }),
  "ErrorRSWP"
);
function ErrorMessage({
  children,
  styles: { bgColor, errorColor, height }
}) {
  return /* @__PURE__ */ React10.createElement(Wrapper4, { "data-component-name": "ErrorMessage", style: { bgColor, errorColor, h: height } }, children);
}

// src/components/Info.tsx
import React14, { memo as memo5, useEffect as useEffect3, useRef as useRef3, useState as useState3 } from "react";
import { fade } from "colorizr";

// src/components/icons/Favorite.tsx
import React11 from "react";
function Favorite(props) {
  return /* @__PURE__ */ React11.createElement("svg", { height: "1em", preserveAspectRatio: "xMidYMid", viewBox: "0 0 64 64", width: "1em", ...props }, /* @__PURE__ */ React11.createElement(
    "path",
    {
      d: "M63.673 16.52A17.676 17.676 0 0 0 49.197 2.563c-5.4-.861-10.891.852-14.844 4.63a3.43 3.43 0 0 1-4.672 0C22.956.689 12.305.62 5.498 7.039c-6.808 6.419-7.366 17.055-1.268 24.15l24.246 28.894a4.623 4.623 0 0 0 7.078 0L59.8 31.19a17.328 17.328 0 0 0 3.873-14.66v-.008Z",
      fill: "currentColor"
    }
  ));
}

// src/components/icons/FavoriteOutline.tsx
import React12 from "react";
function FavoriteOutline(props) {
  return /* @__PURE__ */ React12.createElement("svg", { height: "1em", preserveAspectRatio: "xMidYMid", viewBox: "0 0 64 64", width: "1em", ...props }, /* @__PURE__ */ React12.createElement(
    "path",
    {
      d: "M5.944 7.206C13.271.3 24.723.34 31.999 7.3A18.924 18.924 0 0 1 48.02 2.32h.008a19.068 19.068 0 0 1 15.617 15.071v.013A18.759 18.759 0 0 1 59.47 33.26L37.573 59.353a7.288 7.288 0 0 1-8.642 1.916 7.276 7.276 0 0 1-2.498-1.912l-21.901-26.1c-6.55-7.671-5.93-19.131 1.408-26.051h.004Zm13.04 1.04a12.726 12.726 0 0 0-9.737 20.997l.021.02 21.905 26.105c.316.372.84.488 1.284.285.143-.066.27-.164.372-.285l21.934-26.137a12.565 12.565 0 0 0 2.808-10.625 12.875 12.875 0 0 0-10.534-10.17 12.714 12.714 0 0 0-10.785 3.37l-.029.029a6.198 6.198 0 0 1-8.444 0l-.037-.033a12.727 12.727 0 0 0-8.758-3.556Z",
      fill: "currentColor"
    }
  ));
}

// src/components/SpotifyLogo.tsx
import React13 from "react";
import { textColor } from "colorizr";
function SpotifyLogo({ bgColor, ...rest }) {
  return /* @__PURE__ */ React13.createElement("svg", { height: "1em", preserveAspectRatio: "xMidYMid", viewBox: "0 0 512 160", width: "3.2em", ...rest }, /* @__PURE__ */ React13.createElement(
    "path",
    {
      d: "M79.655 0C35.664 0 0 35.663 0 79.654c0 43.993 35.664 79.653 79.655 79.653 43.996 0 79.656-35.66 79.656-79.653 0-43.988-35.66-79.65-79.657-79.65L79.655 0Zm36.53 114.884a4.963 4.963 0 0 1-6.83 1.646c-18.702-11.424-42.246-14.011-69.973-7.676a4.967 4.967 0 0 1-5.944-3.738 4.958 4.958 0 0 1 3.734-5.945c30.343-6.933 56.37-3.948 77.367 8.884a4.965 4.965 0 0 1 1.645 6.83Zm9.75-21.689c-1.799 2.922-5.622 3.845-8.543 2.047-21.41-13.16-54.049-16.972-79.374-9.284a6.219 6.219 0 0 1-7.75-4.138 6.22 6.22 0 0 1 4.141-7.745c28.929-8.778 64.892-4.526 89.48 10.583 2.92 1.798 3.843 5.622 2.045 8.538Zm.836-22.585C101.1 55.362 58.742 53.96 34.231 61.4c-3.936 1.194-8.098-1.028-9.29-4.964a7.453 7.453 0 0 1 4.965-9.294c28.137-8.542 74.912-6.892 104.469 10.655a7.441 7.441 0 0 1 2.606 10.209c-2.092 3.54-6.677 4.707-10.206 2.605h-.004Zm89.944 2.922c-13.754-3.28-16.198-5.581-16.198-10.418 0-4.57 4.299-7.645 10.7-7.645 6.202 0 12.347 2.336 18.796 7.143.19.145.437.203.675.165a.888.888 0 0 0 .6-.367l6.715-9.466a.903.903 0 0 0-.171-1.225c-7.676-6.157-16.313-9.15-26.415-9.15-14.848 0-25.225 8.911-25.225 21.662 0 13.673 8.95 18.515 24.417 22.252 13.155 3.031 15.38 5.57 15.38 10.11 0 5.032-4.49 8.161-11.718 8.161-8.028 0-14.582-2.71-21.906-9.046a.932.932 0 0 0-.656-.218.89.89 0 0 0-.619.313l-7.533 8.96a.906.906 0 0 0 .086 1.256c8.522 7.61 19.004 11.624 30.323 11.624 16 0 26.339-8.742 26.339-22.277.028-11.421-6.81-17.746-23.561-21.821l-.029-.013Zm59.792-13.564c-6.934 0-12.622 2.732-17.321 8.33v-6.3c0-.498-.4-.903-.894-.903h-12.318a.899.899 0 0 0-.894.902v70.009c0 .494.4.903.894.903h12.318a.901.901 0 0 0 .894-.903v-22.097c4.699 5.26 10.387 7.838 17.32 7.838 12.89 0 25.94-9.92 25.94-28.886.019-18.97-13.032-28.894-25.93-28.894l-.01.001Zm11.614 28.893c0 9.653-5.945 16.397-14.468 16.397-8.418 0-14.772-7.048-14.772-16.397 0-9.35 6.354-16.397 14.772-16.397 8.38 0 14.468 6.893 14.468 16.396Zm47.759-28.893c-16.598 0-29.601 12.78-29.601 29.1 0 16.143 12.917 28.784 29.401 28.784 16.655 0 29.696-12.736 29.696-28.991 0-16.2-12.955-28.89-29.496-28.89v-.003Zm0 45.385c-8.827 0-15.485-7.096-15.485-16.497 0-9.444 6.43-16.298 15.285-16.298 8.884 0 15.58 7.093 15.58 16.504 0 9.443-6.468 16.291-15.38 16.291Zm64.937-44.258h-13.554V47.24c0-.497-.4-.902-.894-.902H374.05a.906.906 0 0 0-.904.902v13.855h-5.916a.899.899 0 0 0-.894.902v10.584a.9.9 0 0 0 .894.903h5.916v27.39c0 11.062 5.508 16.674 16.38 16.674 4.413 0 8.075-.914 11.528-2.873a.88.88 0 0 0 .457-.78v-10.083a.896.896 0 0 0-.428-.76.873.873 0 0 0-.876-.039c-2.368 1.19-4.66 1.741-7.229 1.741-3.947 0-5.716-1.798-5.716-5.812V73.49h13.554a.899.899 0 0 0 .894-.903V62.003a.873.873 0 0 0-.884-.903l-.01-.005Zm47.217.054v-1.702c0-5.006 1.921-7.238 6.22-7.238 2.57 0 4.633.51 6.945 1.28a.895.895 0 0 0 1.18-.858l-.001-10.377a.891.891 0 0 0-.637-.865c-2.435-.726-5.555-1.47-10.235-1.47-11.367 0-17.388 6.405-17.388 18.516v2.606h-5.916a.906.906 0 0 0-.904.902v10.638c0 .497.41.903.904.903h5.916v42.237c0 .504.41.904.904.904h12.308c.504 0 .904-.4.904-.904V73.487h11.5l17.616 42.234c-1.998 4.433-3.967 5.317-6.65 5.317-2.168 0-4.46-.646-6.79-1.93a.98.98 0 0 0-.714-.067.896.896 0 0 0-.533.485l-4.175 9.16a.9.9 0 0 0 .39 1.17c4.356 2.359 8.284 3.367 13.145 3.367 9.093 0 14.125-4.242 18.548-15.637l21.364-55.204a.88.88 0 0 0-.095-.838.878.878 0 0 0-.733-.392h-12.822a.901.901 0 0 0-.856.605l-13.136 37.509-14.382-37.534a.898.898 0 0 0-.837-.58h-21.04v-.003Zm-27.375-.054h-12.318a.907.907 0 0 0-.903.902v53.724c0 .504.409.904.903.904h12.318c.495 0 .904-.4.904-.904v-53.72a.9.9 0 0 0-.904-.903v-.003Zm-6.088-24.464c-4.88 0-8.836 3.95-8.836 8.828a8.835 8.835 0 0 0 8.836 8.836c4.88 0 8.827-3.954 8.827-8.836a8.83 8.83 0 0 0-8.827-8.828Z",
      fill: textColor(bgColor)
    }
  ));
}

// src/modules/getters.ts
function getLocale(locale) {
  return {
    currentDevice: "Current device",
    devices: "Devices",
    next: "Next",
    otherDevices: "Select other device",
    pause: "Pause",
    play: "Play",
    previous: "Previous",
    removeTrack: "Remove from your favorites",
    saveTrack: "Save to your favorites",
    title: "{name} on SPOTIFY",
    volume: "Volume",
    ...locale
  };
}
function getMergedStyles(styles) {
  return {
    activeColor: "#1cb954",
    altColor: "#ccc",
    bgColor: "#fff",
    color: "#333",
    errorColor: "#ff0026",
    height: 80,
    loaderColor: "#ccc",
    loaderSize: 32,
    sliderColor: "#666",
    sliderHandleBorderRadius: "50%",
    sliderHandleColor: "#000",
    sliderHeight: 4,
    sliderTrackBorderRadius: 4,
    sliderTrackColor: "#ccc",
    trackArtistColor: "#666",
    trackNameColor: "#333",
    ...styles
  };
}
function getSpotifyLink(uri) {
  const [, type = "", id = ""] = uri.split(":");
  return `https://open.spotify.com/${type}/${id}`;
}
function getSpotifyLinkTitle(name, locale) {
  return locale.replace("{name}", name);
}
function getSpotifyURIType(uri) {
  const [, type = ""] = uri.split(":");
  return type;
}

// src/modules/hooks.ts
import { useEffect as useEffect2, useRef as useRef2, useState as useState2 } from "react";
function useMediaQuery(input) {
  const getMatches = (query) => {
    return window.matchMedia(query).matches;
  };
  const [matches, setMatches] = useState2(getMatches(input));
  function handleChange() {
    setMatches(getMatches(input));
  }
  useEffect2(() => {
    const matchMedia = window.matchMedia(input);
    handleChange();
    try {
      matchMedia.addEventListener("change", handleChange);
    } catch {
      matchMedia.addListener(handleChange);
    }
    return () => {
      try {
        matchMedia.removeEventListener("change", handleChange);
      } catch {
        matchMedia.removeListener(handleChange);
      }
    };
  }, [input]);
  return matches;
}
function usePrevious(value) {
  const ref = useRef2();
  useEffect2(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// src/modules/spotify.ts
async function checkTracksStatus(token, tracks) {
  const ids = Array.isArray(tracks) ? tracks : [tracks];
  return fetch(`https://api.spotify.com/v1/me/tracks/contains?ids=${ids}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    method: "GET"
  }).then((d) => d.json());
}
async function getDevices(token) {
  return fetch(`https://api.spotify.com/v1/me/player/devices`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    method: "GET"
  }).then((d) => d.json());
}
async function getPlaybackState(token) {
  return fetch(`https://api.spotify.com/v1/me/player`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    method: "GET"
  }).then((d) => {
    if (d.status === 204) {
      return null;
    }
    return d.json();
  });
}
async function pause(token) {
  return fetch(`https://api.spotify.com/v1/me/player/pause`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    method: "PUT"
  });
}
async function play(token, { context_uri, deviceId, offset = 0, uris }) {
  let body;
  if (context_uri) {
    const isArtist = context_uri.indexOf("artist") >= 0;
    let position;
    if (!isArtist) {
      position = { position: offset };
    }
    body = JSON.stringify({ context_uri, offset: position });
  } else if (Array.isArray(uris) && uris.length) {
    body = JSON.stringify({ uris, offset: { position: offset } });
  }
  return fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
    body,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    method: "PUT"
  });
}
async function removeTracks(token, tracks) {
  const ids = Array.isArray(tracks) ? tracks : [tracks];
  return fetch(`https://api.spotify.com/v1/me/tracks`, {
    body: JSON.stringify(ids),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    method: "DELETE"
  });
}
async function saveTracks(token, tracks) {
  const ids = Array.isArray(tracks) ? tracks : [tracks];
  return fetch(`https://api.spotify.com/v1/me/tracks`, {
    body: JSON.stringify({ ids }),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    method: "PUT"
  });
}
async function seek(token, position) {
  return fetch(`https://api.spotify.com/v1/me/player/seek?position_ms=${position}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    method: "PUT"
  });
}
async function setDevice(token, deviceId, shouldPlay) {
  return fetch(`https://api.spotify.com/v1/me/player`, {
    body: JSON.stringify({ device_ids: [deviceId], play: shouldPlay }),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    method: "PUT"
  });
}
async function setVolume(token, volume) {
  return fetch(`https://api.spotify.com/v1/me/player/volume?volume_percent=${volume}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    method: "PUT"
  });
}

// src/components/Info.tsx
var imageSize = 64;
var iconSize = 32;
var Wrapper5 = styled("div")(
  {
    textAlign: "left",
    "> a": {
      display: "inline-flex",
      textDecoration: "none",
      minHeigth: px(64),
      minWidth: px(64),
      "&:hover": {
        textDecoration: "underline"
      }
    },
    button: {
      alignItems: "center",
      display: "flex",
      fontSize: px(16),
      height: px(iconSize + 8),
      justifyContent: "center",
      width: px(iconSize)
    }
  },
  ({ style }) => {
    const isCompactLayout = style.layout === "compact";
    const styles = {};
    if (isCompactLayout) {
      styles.borderBottom = `1px solid ${fade(style.c, 40)}`;
      styles["> a"] = {
        display: "flex",
        margin: "0 auto",
        maxWidth: px(640),
        paddingBottom: "100%",
        position: "relative",
        img: {
          display: "block",
          bottom: 0,
          left: 0,
          maxWidth: "100%",
          position: "absolute",
          right: 0,
          top: 0
        }
      };
    } else {
      styles.alignItems = "center";
      styles.display = "flex";
      styles.minHeight = px(80);
      styles["@media (max-width: 767px)"] = {
        borderBottom: `1px solid ${fade(style.c, 40)}`,
        paddingLeft: px(8),
        display: "none",
        width: "100%"
      };
      styles.img = {
        height: px(imageSize),
        width: px(imageSize)
      };
      styles["&.rswp__active"] = {
        "@media (max-width: 767px)": {
          display: "flex"
        }
      };
    }
    return {
      button: {
        color: style.c,
        "&.rswp__active": {
          color: style.activeColor
        }
      },
      ...styles
    };
  },
  "InfoRSWP"
);
var ContentWrapper = styled("div")(
  {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "> a": {
      fontSize: px(22),
      marginTop: px(4)
    }
  },
  ({ style }) => {
    const isCompactLayout = style.layout === "compact";
    const styles = {};
    if (isCompactLayout) {
      styles.padding = px(8);
      styles.width = "100%";
    } else {
      styles.minHeight = px(imageSize);
      if (!style.hideCoverArt) {
        styles.marginLeft = px(8);
        styles.width = `calc(100% - ${px(imageSize + 8)})`;
      } else {
        styles.width = "100%";
      }
    }
    return styles;
  },
  "ContentWrapperRSWP"
);
var Content = styled("div")(
  {
    display: "flex",
    justifyContent: "start",
    '[data-type="title-artist-wrapper"]': {
      overflow: "hidden",
      div: {
        marginLeft: `-${px(8)}`,
        whiteSpace: "nowrap"
      }
    },
    p: {
      fontSize: px(14),
      lineHeight: 1.3,
      paddingLeft: px(8),
      paddingRight: px(8),
      width: "100%",
      "&:nth-of-type(1)": {
        alignItems: "center",
        display: "inline-flex"
      },
      "&:nth-of-type(2)": {
        fontSize: px(12)
      }
    },
    span: {
      display: "inline-block"
    }
  },
  ({ style }) => {
    return {
      '[data-type="title-artist-wrapper"]': {
        color: style.trackNameColor,
        maxWidth: `calc(100% - ${px(style.showSaveIcon ? iconSize : 0)})`,
        div: {
          "-webkit-mask-image": `linear-gradient(90deg,transparent 0, ${style.bgColor} 6px, ${style.bgColor} calc(100% - 12px),transparent)`
        }
      },
      p: {
        "&:nth-of-type(1)": {
          color: style.trackNameColor,
          a: {
            color: style.trackNameColor
          }
        },
        "&:nth-of-type(2)": {
          color: style.trackArtistColor,
          a: {
            color: style.trackArtistColor
          }
        }
      }
    };
  },
  "ContentRSWP"
);
function Info(props) {
  const {
    hideAttribution,
    hideCoverArt,
    isActive,
    layout,
    locale,
    onFavoriteStatusChange,
    showSaveIcon,
    styles: { activeColor, bgColor, color, height, trackArtistColor, trackNameColor },
    token,
    track: { artists = [], id, image, name, uri },
    updateSavedStatus
  } = props;
  const [isSaved, setIsSaved] = useState3(false);
  const isMounted = useRef3(false);
  const previousId = usePrevious(id);
  const isCompactLayout = layout === "compact";
  const updateState = (state) => {
    if (!isMounted.current) {
      return;
    }
    setIsSaved(state);
  };
  const setStatus = async () => {
    if (!isMounted.current) {
      return;
    }
    if (updateSavedStatus && id) {
      updateSavedStatus((newStatus) => {
        updateState(newStatus);
      });
    }
    const status = await checkTracksStatus(token, id);
    const [isFavorite] = status || [false];
    updateState(isFavorite);
    onFavoriteStatusChange(isSaved);
  };
  useEffect3(() => {
    isMounted.current = true;
    if (showSaveIcon && id) {
      setStatus();
    }
    return () => {
      isMounted.current = false;
    };
  }, []);
  useEffect3(() => {
    if (showSaveIcon && previousId !== id && id) {
      updateState(false);
      setStatus();
    }
  });
  const handleClickIcon = async () => {
    if (isSaved) {
      await removeTracks(token, id);
      updateState(false);
    } else {
      await saveTracks(token, id);
      updateState(true);
    }
    onFavoriteStatusChange(!isSaved);
  };
  const title = getSpotifyLinkTitle(name, locale.title);
  let favorite;
  if (showSaveIcon && id) {
    favorite = /* @__PURE__ */ React14.createElement(
      "button",
      {
        "aria-label": isSaved ? locale.removeTrack : locale.saveTrack,
        className: isSaved ? "rswp__active" : void 0,
        onClick: handleClickIcon,
        title: isSaved ? locale.removeTrack : locale.saveTrack,
        type: "button"
      },
      isSaved ? /* @__PURE__ */ React14.createElement(Favorite, null) : /* @__PURE__ */ React14.createElement(FavoriteOutline, null)
    );
  }
  const content = {};
  const classes = [];
  if (isActive) {
    classes.push("rswp__active");
  }
  if (isCompactLayout) {
    content.image = /* @__PURE__ */ React14.createElement("img", { alt: name, src: image });
  }
  if (!id) {
    return /* @__PURE__ */ React14.createElement("div", null);
  }
  return /* @__PURE__ */ React14.createElement(
    Wrapper5,
    {
      className: classes.join(" "),
      "data-component-name": "Info",
      style: {
        activeColor,
        c: color,
        h: height,
        layout,
        showSaveIcon
      }
    },
    !hideCoverArt && /* @__PURE__ */ React14.createElement(
      "a",
      {
        "aria-label": title,
        href: getSpotifyLink(uri),
        rel: "noreferrer",
        target: "_blank",
        title
      },
      /* @__PURE__ */ React14.createElement("img", { alt: name, src: image })
    ),
    /* @__PURE__ */ React14.createElement(
      ContentWrapper,
      {
        style: {
          hideCoverArt,
          layout,
          showSaveIcon
        }
      },
      !!name && /* @__PURE__ */ React14.createElement(
        Content,
        {
          style: {
            bgColor,
            layout,
            showSaveIcon,
            trackArtistColor,
            trackNameColor
          }
        },
        /* @__PURE__ */ React14.createElement("div", { "data-type": "title-artist-wrapper" }, /* @__PURE__ */ React14.createElement("div", null, /* @__PURE__ */ React14.createElement("p", null, /* @__PURE__ */ React14.createElement("span", null, /* @__PURE__ */ React14.createElement(
          "a",
          {
            "aria-label": title,
            href: getSpotifyLink(uri),
            rel: "noreferrer",
            target: "_blank",
            title
          },
          name
        ))), /* @__PURE__ */ React14.createElement("p", { title: artists.map((d) => d.name).join(", ") }, artists.map((artist, index) => {
          const artistTitle = getSpotifyLinkTitle(artist.name, locale.title);
          return /* @__PURE__ */ React14.createElement("span", { key: artist.uri }, index ? ", " : "", /* @__PURE__ */ React14.createElement(
            "a",
            {
              "aria-label": artistTitle,
              href: getSpotifyLink(artist.uri),
              rel: "noreferrer",
              target: "_blank",
              title: artistTitle
            },
            artist.name
          ));
        })))),
        favorite
      ),
      !hideAttribution && /* @__PURE__ */ React14.createElement(
        "a",
        {
          "aria-label": "Play on Spotify",
          href: getSpotifyLink(uri),
          rel: "noreferrer",
          target: "_blank"
        },
        /* @__PURE__ */ React14.createElement(SpotifyLogo, { bgColor })
      )
    )
  );
}
var Info_default = memo5(Info);

// src/components/Loader.tsx
import React15 from "react";
var Wrapper6 = styled("div")(
  {
    alignItems: "center",
    display: "flex",
    jsutifyContent: "center",
    position: "relative",
    "> div": {
      borderRadius: "50%",
      borderStyle: "solid",
      borderWidth: 0,
      boxSizing: "border-box",
      height: 0,
      left: "50%",
      position: "absolute",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: 0
    }
  },
  ({ style }) => {
    const pulse = keyframes({
      "0%": {
        height: 0,
        width: 0
      },
      "30%": {
        borderWidth: px(8),
        height: px(style.loaderSize),
        opacity: 1,
        width: px(style.loaderSize)
      },
      "100%": {
        borderWidth: 0,
        height: px(style.loaderSize),
        opacity: 0,
        width: px(style.loaderSize)
      }
    });
    return {
      height: px(style.h),
      "> div": {
        animation: `${pulse} 1.15s infinite cubic-bezier(0.215, 0.61, 0.355, 1)`,
        borderColor: style.loaderColor,
        height: px(style.loaderSize),
        width: px(style.loaderSize)
      }
    };
  },
  "LoaderRSWP"
);
function Loader({ styles: { height, loaderColor, loaderSize } }) {
  return /* @__PURE__ */ React15.createElement(Wrapper6, { "data-component-name": "Loader", style: { h: height, loaderColor, loaderSize } }, /* @__PURE__ */ React15.createElement("div", null));
}

// src/components/Volume.tsx
import React20, { useCallback as useCallback2, useEffect as useEffect4, useRef as useRef4, useState as useState4 } from "react";
import RangeSlider2 from "@gilbarbara/react-range-slider";

// src/components/icons/VolumeHigh.tsx
import React16 from "react";
function VolumeHigh(props) {
  return /* @__PURE__ */ React16.createElement(
    "svg",
    {
      "data-component-name": "VolumeHigh",
      height: "1em",
      preserveAspectRatio: "xMidYMid",
      viewBox: "0 0 64 64",
      width: "1em",
      ...props
    },
    /* @__PURE__ */ React16.createElement(
      "path",
      {
        d: "M37.963 3.402a2.989 2.989 0 0 1 1.5 2.596v52a3 3 0 0 1-4.5 2.6l-27.7-16C.32 40.572-2.06 31.688 1.943 24.73a14.556 14.556 0 0 1 5.32-5.328l27.7-16a3 3 0 0 1 3 0ZM45 9.542a23.008 23.008 0 0 1 0 44.912V48.25a17.008 17.008 0 0 0 0-32.508Zm-11.532 1.656-23.2 13.4a8.556 8.556 0 0 0 0 14.8l23.2 13.4v-41.6ZM45 22.238a11 11 0 0 1 0 19.52v-19.52Z",
        fill: "currentColor"
      }
    )
  );
}

// src/components/icons/VolumeLow.tsx
import React17 from "react";
function VolumeLow(props) {
  return /* @__PURE__ */ React17.createElement(
    "svg",
    {
      "data-component-name": "VolumeLow",
      height: "1em",
      preserveAspectRatio: "xMidYMid",
      viewBox: "0 0 64 64",
      width: "1em",
      ...props
    },
    /* @__PURE__ */ React17.createElement(
      "path",
      {
        d: "M37.963 3.398a3 3 0 0 1 1.5 2.6v52a3 3 0 0 1-4.5 2.6l-27.7-16C.32 40.572-2.06 31.688 1.943 24.73a14.556 14.556 0 0 1 5.32-5.328l27.7-16a3 3 0 0 1 3 0v-.004Zm-27.696 21.2a8.556 8.556 0 0 0 0 14.8l23.2 13.4v-41.6l-23.2 13.4ZM45 41.758v-19.52a11 11 0 0 1 0 19.52Z",
        fill: "currentColor"
      }
    )
  );
}

// src/components/icons/VolumeMid.tsx
import React18 from "react";
function VolumeHigh2(props) {
  return /* @__PURE__ */ React18.createElement(
    "svg",
    {
      "data-component-name": "VolumeMid",
      height: "1em",
      preserveAspectRatio: "xMidYMid",
      viewBox: "0 0 64 64",
      width: "1em",
      ...props
    },
    /* @__PURE__ */ React18.createElement(
      "path",
      {
        d: "M37.963 3.398a3 3 0 0 1 1.5 2.6v52a3 3 0 0 1-4.5 2.6l-27.7-16C.32 40.572-2.06 31.688 1.943 24.73a14.556 14.556 0 0 1 5.32-5.328l27.7-16a3 3 0 0 1 3 0v-.004Zm-27.696 21.2a8.556 8.556 0 0 0 0 14.8l23.2 13.4v-41.6l-23.2 13.4ZM45 48.946a18.008 18.008 0 0 0 0-33.896v6.6a11.996 11.996 0 0 1 0 20.7v6.596Z",
        fill: "currentColor"
      }
    )
  );
}

// src/components/icons/VolumeMute.tsx
import React19 from "react";
function VolumeMute(props) {
  return /* @__PURE__ */ React19.createElement(
    "svg",
    {
      "data-component-name": "VolumeMute",
      height: "1em",
      preserveAspectRatio: "xMidYMid",
      viewBox: "0 0 64 64",
      width: "1em",
      ...props
    },
    /* @__PURE__ */ React19.createElement(
      "path",
      {
        d: "M34.963 3.402a3 3 0 0 1 4.5 2.6v7.624a19.03 19.03 0 0 0-6 2.776v-5.2l-23.2 13.4a8.57 8.57 0 0 0-3.12 3.128 8.564 8.564 0 0 0 3.124 11.68l23.196 13.392v-5.2a18.92 18.92 0 0 0 6 2.776v7.624a3 3 0 0 1-4.5 2.596l-27.7-16a14.556 14.556 0 0 1-5.32-5.328C-2.06 32.313.32 23.428 7.263 19.402l27.7-16Zm17.354 17.6a3 3 0 0 1 2.122 5.12l-5.88 5.88 5.876 5.88a3 3 0 0 1-4.24 4.24l-5.88-5.88-5.88 5.88a3 3 0 1 1-4.385-4.095l6.025-6.025-5.876-5.88a3 3 0 0 1 4.236-4.24l5.88 5.88 5.88-5.88a3 3 0 0 1 2.122-.88Z",
        fill: "currentColor"
      }
    )
  );
}

// src/components/Volume.tsx
var WrapperWithToggle = styled("div")(
  {
    display: "none",
    "pointer-events": "all",
    position: "relative",
    zIndex: 20,
    "> div": {
      alignItems: "center",
      backgroundColor: "#000",
      borderRadius: px(4),
      color: "#fff",
      display: "flex",
      filter: "drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.5))",
      flexDirection: "column",
      left: "-4px",
      padding: px(16),
      position: "absolute",
      "> span": {
        background: "transparent",
        borderLeft: `6px solid transparent`,
        borderRight: `6px solid transparent`,
        content: '""',
        display: "block",
        height: 0,
        position: "absolute",
        width: 0
      }
    },
    "> button": {
      alignItems: "center",
      display: "flex",
      fontSize: px(24),
      height: px(32),
      justifyContent: "center",
      width: px(32)
    },
    "@media (any-pointer: fine)": {
      display: "block"
    }
  },
  ({ style }) => {
    const isCompact = style.layout === "compact";
    const spanStyles = isCompact ? {
      bottom: `-${px(6)}`,
      borderTop: `6px solid #000`
    } : {
      [style.p === "top" ? "border-bottom" : "border-top"]: `6px solid #000`,
      [style.p]: "-6px"
    };
    return {
      "> button": {
        color: style.c
      },
      "> div": {
        [isCompact ? "bottom" : style.p]: "130%",
        "> span": spanStyles
      }
    };
  },
  "VolumeRSWP"
);
var WrapperInline = styled("div")(
  {
    display: "none",
    padding: `0 ${px(8)}`,
    "pointer-events": "all",
    "> div": {
      display: "flex",
      padding: `0 ${px(5)}`,
      width: px(100)
    },
    "> span": {
      display: "flex",
      fontSize: px(24)
    },
    "@media (any-pointer: fine)": {
      alignItems: "center",
      display: "flex"
    }
  },
  ({ style }) => ({
    color: style.c
  }),
  "VolumeInlineRSWP"
);
function Volume(props) {
  const { inlineVolume, layout, locale, playerPosition, setVolume: setVolume2, styles, volume } = props;
  const [isOpen, setIsOpen] = useState4(false);
  const [volumeState, setVolumeState] = useState4(volume);
  const timeoutRef = useRef4();
  const previousVolume = usePrevious(volume);
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const isInline = layout === "responsive" && inlineVolume && isMediumScreen;
  useEffect4(() => {
    if (previousVolume !== volume && volume !== volumeState) {
      setVolumeState(volume);
    }
  }, [previousVolume, volume, volumeState]);
  const handleClickToggleList = useCallback2(() => {
    setIsOpen((s) => !s);
  }, []);
  const handleChangeSlider = ({ x, y }) => {
    const value = isInline ? x : y;
    const currentvolume = Math.round(value) / 100;
    clearTimeout(timeoutRef.current);
    setVolume2(currentvolume);
    setVolumeState(currentvolume);
  };
  const handleAfterEnd = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };
  let icon = /* @__PURE__ */ React20.createElement(VolumeHigh, null);
  if (volume === 0) {
    icon = /* @__PURE__ */ React20.createElement(VolumeMute, null);
  } else if (volume <= 0.4) {
    icon = /* @__PURE__ */ React20.createElement(VolumeLow, null);
  } else if (volume <= 0.7) {
    icon = /* @__PURE__ */ React20.createElement(VolumeHigh2, null);
  }
  if (isInline) {
    return /* @__PURE__ */ React20.createElement(WrapperInline, { "data-component-name": "Volume", "data-value": volume, style: { c: styles.color } }, /* @__PURE__ */ React20.createElement("span", null, icon), /* @__PURE__ */ React20.createElement("div", null, /* @__PURE__ */ React20.createElement(
      RangeSlider2,
      {
        axis: "x",
        className: "volume",
        "data-component-name": "volume-bar",
        onAfterEnd: handleAfterEnd,
        onChange: handleChangeSlider,
        styles: {
          options: {
            thumbBorder: 0,
            thumbBorderRadius: styles.sliderHandleBorderRadius,
            thumbColor: styles.sliderHandleColor,
            height: styles.sliderHeight,
            padding: 0,
            rangeColor: styles.sliderColor,
            trackBorderRadius: styles.sliderTrackBorderRadius,
            trackColor: styles.sliderTrackColor
          }
        },
        x: volume * 100,
        xMax: 100,
        xMin: 0
      }
    )));
  }
  return /* @__PURE__ */ React20.createElement(ClickOutside_default, { isActive: isOpen, onClick: handleClickToggleList }, /* @__PURE__ */ React20.createElement(
    WrapperWithToggle,
    {
      "data-component-name": "Volume",
      "data-value": volume,
      style: { c: styles.color, layout, p: playerPosition }
    },
    isOpen && /* @__PURE__ */ React20.createElement("div", null, /* @__PURE__ */ React20.createElement(
      RangeSlider2,
      {
        axis: "y",
        className: "volume",
        "data-component-name": "volume-bar",
        onAfterEnd: handleAfterEnd,
        onChange: handleChangeSlider,
        styles: {
          options: {
            padding: 0,
            rangeColor: "#fff",
            thumbBorder: 0,
            thumbBorderRadius: 12,
            thumbColor: "#fff",
            thumbSize: 12,
            trackColor: "rgba(255, 255, 255, 0.5)",
            width: 6
          }
        },
        y: volume * 100,
        yMax: 100,
        yMin: 0
      }
    ), /* @__PURE__ */ React20.createElement("span", null)),
    /* @__PURE__ */ React20.createElement(
      "button",
      {
        "aria-label": locale.volume,
        onClick: handleClickToggleList,
        title: locale.volume,
        type: "button"
      },
      icon
    )
  ));
}

// src/components/Wrapper.tsx
import React21, { memo as memo6 } from "react";
var StyledWrapper = styled("div")(
  {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    position: "relative",
    "> *": {
      width: "100%"
    }
  },
  () => {
    const styles = {};
    return {
      ...styles
    };
  },
  "WrapperRSWP"
);
function Wrapper7({
  children
  //  styles
}) {
  return /* @__PURE__ */ React21.createElement(StyledWrapper, null, children);
}
var Wrapper_default = memo6(Wrapper7);

// src/constants.ts
var ERROR_TYPE = {
  ACCOUNT: "account",
  AUTHENTICATION: "authentication",
  INITIALIZATION: "initialization",
  PLAYBACK: "playback",
  PLAYER: "player"
};
var STATUS = {
  ERROR: "ERROR",
  IDLE: "IDLE",
  INITIALIZING: "INITIALIZING",
  READY: "READY",
  RUNNING: "RUNNING",
  UNSUPPORTED: "UNSUPPORTED"
};
var TYPE = {
  DEVICE: "device_update",
  FAVORITE: "favorite_update",
  PLAYER: "player_update",
  PROGRESS: "progress_update",
  STATUS: "status_update",
  TRACK: "track_update"
};

// src/index.tsx
var SpotifyWebPlayer = class extends PureComponent {
  constructor(props) {
    super(props);
    __publicField(this, "isMounted", false);
    __publicField(this, "emptyTrack", {
      artists: [],
      durationMs: 0,
      id: "",
      image: "",
      name: "",
      uri: ""
    });
    __publicField(this, "locale");
    __publicField(this, "player");
    __publicField(this, "playerProgressInterval");
    __publicField(this, "playerSyncInterval");
    __publicField(this, "ref", createRef());
    __publicField(this, "renderInlineActions", false);
    __publicField(this, "resizeTimeout");
    __publicField(this, "seekUpdateInterval", 100);
    __publicField(this, "styles");
    __publicField(this, "syncTimeout");
    // eslint-disable-next-line unicorn/consistent-function-scoping
    __publicField(this, "getPlayOptions", memoize((data) => {
      const playOptions = {
        context_uri: void 0,
        uris: void 0
      };
      if (data) {
        const ids = Array.isArray(data) ? data : [data];
        if (!ids.every((d) => validateURI(d))) {
          console.error("Invalid URI");
          return playOptions;
        }
        if (ids.some((d) => getSpotifyURIType(d) === "track")) {
          if (!ids.every((d) => getSpotifyURIType(d) === "track")) {
            console.warn("You can't mix tracks URIs with other types");
          }
          playOptions.uris = ids.filter((d) => validateURI(d) && getSpotifyURIType(d) === "track");
        } else {
          if (ids.length > 1) {
            console.warn("Albums, Artists, Playlists and Podcasts can't have multiple URIs");
          }
          playOptions.context_uri = ids[0];
        }
      }
      return playOptions;
    }));
    __publicField(this, "handleChangeRange", async (position) => {
      const { track } = this.state;
      const { callback } = this.props;
      let progress = 0;
      try {
        const percentage = position / 100;
        let stateChanges = {};
        if (this.isExternalPlayer) {
          progress = Math.round(track.durationMs * percentage);
          await seek(this.token, progress);
          stateChanges = {
            position,
            progressMs: progress
          };
        } else if (this.player) {
          const state = await this.player.getCurrentState();
          if (state) {
            progress = Math.round(state.track_window.current_track.duration_ms * percentage);
            await this.player.seek(progress);
            stateChanges = {
              position,
              progressMs: progress
            };
          } else {
            stateChanges = { position: 0 };
          }
        }
        this.updateState(stateChanges);
        if (callback) {
          callback({
            ...this.state,
            ...stateChanges,
            type: TYPE.PROGRESS
          });
        }
      } catch (error) {
        console.error(error);
      }
    });
    // private handleClickTogglePlay = async () => {
    //   const { isActive } = this.state;
    //   try {
    //     await this.togglePlay(!this.isExternalPlayer && !isActive);
    //   } catch (error) {
    //     // eslint-disable-next-line no-console
    //     console.error(error);
    //   }
    // };
    // private handleClickPrevious = async () => {
    //   try {
    //     /* istanbul ignore else */
    //     if (this.isExternalPlayer) {
    //       await previous(this.token);
    //       this.syncTimeout = window.setTimeout(() => {
    //         this.syncDevice();
    //       }, 300);
    //     } else if (this.player) {
    //       await this.player.previousTrack();
    //     }
    //   } catch (error) {
    //     // eslint-disable-next-line no-console
    //     console.error(error);
    //   }
    // };
    // private handleClickNext = async () => {
    //   try {
    //     /* istanbul ignore else */
    //     if (this.isExternalPlayer) {
    //       await next(this.token);
    //       this.syncTimeout = window.setTimeout(() => {
    //         this.syncDevice();
    //       }, 300);
    //     } else if (this.player) {
    //       await this.player.nextTrack();
    //     }
    //   } catch (error) {
    //     // eslint-disable-next-line no-console
    //     console.error(error);
    //   }
    // };
    __publicField(this, "handleClickDevice", async (deviceId) => {
      const { isUnsupported } = this.state;
      const { autoPlay, persistDeviceSelection } = this.props;
      this.updateState({ currentDeviceId: deviceId });
      try {
        await setDevice(this.token, deviceId);
        if (persistDeviceSelection) {
          sessionStorage.setItem("rswpDeviceId", deviceId);
        }
        if (isUnsupported) {
          await this.syncDevice();
          const player = await getPlaybackState(this.token);
          if (player && !player.is_playing && autoPlay) {
            await this.togglePlay(true);
          }
        }
      } catch (error) {
        console.error(error);
      }
    });
    __publicField(this, "handleFavoriteStatusChange", (status) => {
      const { isSaved } = this.state;
      this.updateState({ isSaved: status });
      if (isSaved !== status) {
        this.handleCallback({
          ...this.state,
          isSaved: status,
          type: TYPE.FAVORITE
        });
      }
    });
    __publicField(this, "handlePlayerErrors", async (type, message) => {
      const { status } = this.state;
      const isPlaybackError = type === ERROR_TYPE.PLAYBACK;
      const isInitializationError = type === ERROR_TYPE.INITIALIZATION;
      let nextStatus = status;
      let devices = [];
      if (this.player && !isPlaybackError) {
        this.player.disconnect();
        this.player = void 0;
      }
      if (isInitializationError) {
        nextStatus = STATUS.UNSUPPORTED;
        ({ devices = [] } = await getDevices(this.token));
      } else if (!isPlaybackError) {
        nextStatus = STATUS.ERROR;
      }
      this.updateState({
        devices,
        error: message,
        errorType: type,
        isInitializing: false,
        isUnsupported: isInitializationError,
        status: nextStatus
      });
    });
    __publicField(this, "handlePlayerStateChanges", async (state) => {
      try {
        if (state) {
          const {
            paused,
            position,
            track_window: { current_track, next_tracks, previous_tracks }
          } = state;
          const isPlaying = !paused;
          const volume = await this.player?.getVolume() || 100;
          let trackState = {};
          if (position === 0 && current_track) {
            trackState = {
              nextTracks: next_tracks.map(convertTrack),
              position: 0,
              previousTracks: previous_tracks.map(convertTrack),
              track: convertTrack(current_track)
            };
          }
          this.updateState({
            error: "",
            errorType: null,
            isActive: true,
            isPlaying,
            progressMs: position,
            volume: round(volume),
            ...trackState
          });
        } else if (this.isExternalPlayer) {
          await this.syncDevice();
        } else {
          this.updateState({
            isActive: false,
            isPlaying: false,
            nextTracks: [],
            position: 0,
            previousTracks: [],
            track: {
              artists: [],
              durationMs: 0,
              id: "",
              image: "",
              name: "",
              uri: ""
            }
          });
        }
      } catch (error) {
        console.error(error);
      }
    });
    __publicField(this, "handlePlayerStatus", async ({ device_id }) => {
      const { currentDeviceId, devices } = await this.initializeDevices(device_id);
      this.updateState({
        currentDeviceId,
        deviceId: device_id,
        devices,
        isInitializing: false,
        status: device_id ? STATUS.READY : STATUS.IDLE
      });
    });
    __publicField(this, "handleResize", () => {
      const { layout = "responsive" } = this.props;
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = window.setTimeout(() => {
        this.renderInlineActions = window.innerWidth >= 768 && layout === "responsive";
        this.forceUpdate();
      }, 100);
    });
    __publicField(this, "handleToggleMagnify", () => {
      const { magnifySliderOnHover } = this.props;
      if (magnifySliderOnHover) {
        this.updateState((previousState) => {
          return { isMagnified: !previousState.isMagnified };
        });
      }
    });
    __publicField(this, "initializePlayer", () => {
      const { volume } = this.state;
      const {
        getOAuthToken = (callback) => {
          callback(this.token);
        },
        name = "Spotify Web Player"
      } = this.props;
      if (!window.Spotify) {
        return;
      }
      this.updateState({
        error: "",
        errorType: null,
        isInitializing: true
      });
      this.player = new window.Spotify.Player({
        getOAuthToken,
        name,
        volume
      });
      this.player.addListener("ready", this.handlePlayerStatus);
      this.player.addListener("not_ready", this.handlePlayerStatus);
      this.player.addListener("player_state_changed", this.handlePlayerStateChanges);
      this.player.addListener(
        "initialization_error",
        (error) => this.handlePlayerErrors(ERROR_TYPE.INITIALIZATION, error.message)
      );
      this.player.addListener(
        "authentication_error",
        (error) => this.handlePlayerErrors(ERROR_TYPE.AUTHENTICATION, error.message)
      );
      this.player.addListener(
        "account_error",
        (error) => this.handlePlayerErrors(ERROR_TYPE.ACCOUNT, error.message)
      );
      this.player.addListener(
        "playback_error",
        (error) => this.handlePlayerErrors(ERROR_TYPE.PLAYBACK, error.message)
      );
      this.player.addListener("autoplay_failed", async () => {
        console.log("Autoplay is not allowed by the browser autoplay rules");
      });
      this.player.connect();
    });
    __publicField(this, "setExternalDevice", (id) => {
      this.updateState({ currentDeviceId: id, isPlaying: true });
    });
    __publicField(this, "setVolume", async (volume) => {
      if (this.isExternalPlayer) {
        await setVolume(this.token, Math.round(volume * 100));
        await this.syncDevice();
      } else if (this.player) {
        await this.player.setVolume(volume);
      }
      this.updateState({ volume });
    });
    __publicField(this, "syncDevice", async () => {
      if (!this.isMounted) {
        return;
      }
      const { deviceId } = this.state;
      try {
        const player = await getPlaybackState(this.token);
        let track = this.emptyTrack;
        if (!player) {
          throw new Error("No player");
        }
        if (player.item) {
          track = {
            artists: player.item.artists,
            durationMs: player.item.duration_ms,
            id: player.item.id,
            image: getAlbumImage(player.item.album),
            name: player.item.name,
            uri: player.item.uri
          };
        }
        this.updateState({
          error: "",
          errorType: null,
          isActive: true,
          isPlaying: player.is_playing,
          nextTracks: [],
          previousTracks: [],
          progressMs: player.item ? player.progress_ms : 0,
          status: STATUS.READY,
          track,
          volume: parseVolume(player.device.volume_percent)
        });
      } catch (error) {
        const state = {
          isActive: false,
          isPlaying: false,
          position: 0,
          track: this.emptyTrack
        };
        if (deviceId) {
          this.updateState({
            currentDeviceId: deviceId,
            ...state
          });
          return;
        }
        this.updateState({
          error: error.message,
          errorType: ERROR_TYPE.PLAYER,
          status: STATUS.ERROR,
          ...state
        });
      }
    });
    __publicField(this, "toggleOffset", async () => {
      const { currentDeviceId } = this.state;
      const { offset, uris } = this.props;
      if (typeof offset === "number" && Array.isArray(uris)) {
        await play(this.token, { deviceId: currentDeviceId, offset, uris });
      }
    });
    __publicField(this, "togglePlay", async (force = false) => {
      const { currentDeviceId, isPlaying, needsUpdate } = this.state;
      const { offset, uris } = this.props;
      const shouldInitialize = force || needsUpdate;
      const playOptions = this.getPlayOptions(uris);
      try {
        if (this.isExternalPlayer) {
          if (!isPlaying) {
            await play(this.token, {
              deviceId: currentDeviceId,
              offset,
              ...shouldInitialize ? playOptions : void 0
            });
          } else {
            await pause(this.token);
            this.updateState({ isPlaying: false });
          }
          this.syncTimeout = window.setTimeout(() => {
            this.syncDevice();
          }, 300);
        } else if (this.player) {
          await this.player.activateElement();
          const playerState = await this.player.getCurrentState();
          const shouldPlay = !playerState && !!(playOptions.context_uri || playOptions.uris);
          if (shouldPlay || shouldInitialize) {
            await play(this.token, {
              deviceId: currentDeviceId,
              offset,
              ...shouldInitialize ? playOptions : void 0
            });
            await this.player.togglePlay();
          } else {
            await this.player.togglePlay();
          }
        }
        if (needsUpdate) {
          this.updateState({ needsUpdate: false });
        }
      } catch (error) {
        console.error(error);
      }
    });
    __publicField(this, "updateSeekBar", async () => {
      if (!this.isMounted) {
        return;
      }
      const { progressMs, track } = this.state;
      try {
        if (this.isExternalPlayer) {
          let position = progressMs / track.durationMs;
          position = Number(((Number.isFinite(position) ? position : 0) * 100).toFixed(1));
          this.updateState({
            position,
            progressMs: progressMs + this.seekUpdateInterval
          });
        } else if (this.player) {
          const state = await this.player.getCurrentState();
          if (state) {
            const progress = state.position;
            const position = Number(
              (progress / state.track_window.current_track.duration_ms * 100).toFixed(1)
            );
            this.updateState({
              position,
              progressMs: progress + this.seekUpdateInterval
            });
          }
        }
      } catch (error) {
        console.error(error);
      }
    });
    __publicField(this, "updateState", (state) => {
      if (!this.isMounted) {
        return;
      }
      this.setState(state);
    });
    this.state = {
      currentDeviceId: "",
      deviceId: "",
      devices: [],
      error: "",
      errorType: null,
      isActive: false,
      isInitializing: false,
      isMagnified: false,
      isPlaying: false,
      isSaved: false,
      isUnsupported: false,
      needsUpdate: false,
      nextTracks: [],
      playerPosition: "bottom",
      position: 0,
      previousTracks: [],
      progressMs: 0,
      status: STATUS.IDLE,
      track: this.emptyTrack,
      volume: parseVolume(props.initialVolume) || 1
    };
    this.locale = getLocale(props.locale);
    this.styles = getMergedStyles(props.styles);
  }
  async componentDidMount() {
    this.isMounted = true;
    const { top = 0 } = this.ref.current?.getBoundingClientRect() || {};
    this.updateState({
      playerPosition: top > window.innerHeight / 2 ? "bottom" : "top",
      status: STATUS.INITIALIZING
    });
    if (!window.onSpotifyWebPlaybackSDKReady) {
      window.onSpotifyWebPlaybackSDKReady = this.initializePlayer;
    } else {
      this.initializePlayer();
    }
    await loadSpotifyPlayer();
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }
  async componentDidUpdate(previousProps, previousState) {
    const { currentDeviceId, deviceId, isInitializing, isPlaying, status, track, volume } = this.state;
    const {
      autoPlay,
      layout,
      locale,
      offset,
      play: playProp,
      setVolume: setVolumeProp,
      showSaveIcon,
      styles,
      syncExternalDevice,
      uris
    } = this.props;
    const isReady = previousState.status !== STATUS.READY && status === STATUS.READY;
    const changedLayout = !isEqual(previousProps.layout, layout);
    const changedLocale = !isEqual(previousProps.locale, locale);
    const changedStyles = !isEqual(previousProps.styles, styles);
    const changedURIs = !isEqual(previousProps.uris, uris);
    const playOptions = this.getPlayOptions(uris);
    const canPlay = !!currentDeviceId && !!(playOptions.context_uri || playOptions.uris);
    const shouldPlay = isReady && (autoPlay || playProp);
    if (canPlay && shouldPlay) {
      await this.togglePlay(true);
      if (!isPlaying) {
        this.updateState({ isPlaying: true });
      }
      if (this.isExternalPlayer) {
        this.syncTimeout = window.setTimeout(() => {
          this.syncDevice();
        }, 600);
      }
    } else if (changedURIs) {
      if (isPlaying || playProp) {
        await this.togglePlay(true);
      } else {
        this.updateState({ needsUpdate: true });
      }
    } else if (previousProps.play !== playProp && playProp !== isPlaying) {
      await this.togglePlay(!track.id);
    }
    if (previousState.status !== status) {
      this.handleCallback({
        ...this.state,
        type: TYPE.STATUS
      });
    }
    if (previousState.currentDeviceId !== currentDeviceId && currentDeviceId) {
      if (!isReady) {
        this.handleCallback({
          ...this.state,
          type: TYPE.DEVICE
        });
      }
      await this.toggleSyncInterval(this.isExternalPlayer);
      await this.updateSeekBar();
    }
    if (previousState.track.id !== track.id && track.id) {
      this.handleCallback({
        ...this.state,
        type: TYPE.TRACK
      });
      if (showSaveIcon) {
        this.updateState({ isSaved: false });
      }
    }
    if (previousState.isPlaying !== isPlaying) {
      this.toggleProgressBar();
      await this.toggleSyncInterval(this.isExternalPlayer);
      this.handleCallback({
        ...this.state,
        type: TYPE.PLAYER
      });
    }
    if (previousProps.offset !== offset) {
      await this.toggleOffset();
    }
    if (previousState.isInitializing && !isInitializing) {
      if (syncExternalDevice && !uris) {
        const player = await getPlaybackState(this.token);
        if (player && player.is_playing && player.device.id !== deviceId) {
          this.setExternalDevice(player.device.id);
        }
      }
    }
    if (setVolumeProp && setVolumeProp !== volume) {
      await this.setVolume(setVolumeProp);
    }
    if (changedLayout) {
      this.handleResize();
    }
    if (changedLocale) {
      this.locale = getLocale(locale);
    }
    if (changedStyles) {
      this.styles = getMergedStyles(styles);
    }
  }
  async componentWillUnmount() {
    this.isMounted = false;
    if (this.player) {
      this.player.disconnect();
    }
    clearInterval(this.playerSyncInterval);
    clearInterval(this.playerProgressInterval);
    clearTimeout(this.syncTimeout);
    window.removeEventListener("resize", this.handleResize);
  }
  handleCallback(state) {
    const { callback } = this.props;
    if (callback) {
      callback(state);
    }
  }
  get token() {
    const { token } = this.props;
    return token;
  }
  async initializeDevices(id) {
    const { persistDeviceSelection } = this.props;
    const { devices } = await getDevices(this.token);
    let currentDeviceId = id;
    if (persistDeviceSelection) {
      const savedDeviceId = sessionStorage.getItem("rswpDeviceId");
      if (!savedDeviceId || !devices.some((d) => d.id === savedDeviceId)) {
        sessionStorage.setItem("rswpDeviceId", currentDeviceId);
      } else {
        currentDeviceId = savedDeviceId;
      }
    }
    return { currentDeviceId, devices };
  }
  get isExternalPlayer() {
    const { currentDeviceId, deviceId, status } = this.state;
    return currentDeviceId && currentDeviceId !== deviceId || status === STATUS.UNSUPPORTED;
  }
  async toggleSyncInterval(shouldSync) {
    const { syncExternalDeviceInterval } = this.props;
    try {
      if (this.isExternalPlayer && shouldSync && !this.playerSyncInterval) {
        await this.syncDevice();
        clearInterval(this.playerSyncInterval);
        this.playerSyncInterval = window.setInterval(
          this.syncDevice,
          syncExternalDeviceInterval * 1e3
        );
      }
      if ((!shouldSync || !this.isExternalPlayer) && this.playerSyncInterval) {
        clearInterval(this.playerSyncInterval);
        this.playerSyncInterval = void 0;
      }
    } catch (error) {
      console.error(error);
    }
  }
  toggleProgressBar() {
    const { isPlaying } = this.state;
    if (isPlaying) {
      if (!this.playerProgressInterval) {
        this.playerProgressInterval = window.setInterval(
          this.updateSeekBar,
          this.seekUpdateInterval
        );
      }
    } else if (this.playerProgressInterval) {
      clearInterval(this.playerProgressInterval);
      this.playerProgressInterval = void 0;
    }
  }
  render() {
    const {
      currentDeviceId,
      deviceId,
      devices,
      error,
      isActive,
      isMagnified,
      // isPlaying,
      isUnsupported,
      // nextTracks,
      playerPosition,
      position,
      // previousTracks,
      progressMs,
      status,
      track,
      volume
    } = this.state;
    const {
      hideAttribution = false,
      hideCoverArt = false,
      inlineVolume = true,
      layout = "responsive",
      showSaveIcon,
      updateSavedStatus
    } = this.props;
    const isReady = [STATUS.READY, STATUS.UNSUPPORTED].includes(status);
    const output = {
      main: /* @__PURE__ */ React22.createElement(Loader, { styles: this.styles })
    };
    if (isReady) {
      if (!output.info) {
        output.info = /* @__PURE__ */ React22.createElement(
          Info_default,
          {
            hideAttribution,
            hideCoverArt,
            isActive,
            layout,
            locale: this.locale,
            onFavoriteStatusChange: this.handleFavoriteStatusChange,
            showSaveIcon,
            styles: this.styles,
            token: this.token,
            track,
            updateSavedStatus
          }
        );
      }
      output.devices = /* @__PURE__ */ React22.createElement(
        Devices,
        {
          currentDeviceId,
          deviceId,
          devices,
          layout,
          locale: this.locale,
          onClickDevice: this.handleClickDevice,
          open: isUnsupported && !deviceId,
          playerPosition,
          styles: this.styles
        }
      );
      output.volume = currentDeviceId ? /* @__PURE__ */ React22.createElement(
        Volume,
        {
          inlineVolume,
          layout,
          locale: this.locale,
          playerPosition,
          setVolume: this.setVolume,
          styles: this.styles,
          volume
        }
      ) : null;
      if (this.renderInlineActions) {
        output.actions = /* @__PURE__ */ React22.createElement(Actions_default, { layout, styles: this.styles }, output.devices, output.volume);
      }
      output.controls = /* @__PURE__ */ React22.createElement(
        Controls_default,
        {
          durationMs: track.durationMs,
          isMagnified,
          onChangeRange: this.handleChangeRange,
          onToggleMagnify: this.handleToggleMagnify,
          position,
          progressMs,
          styles: this.styles
        }
      );
      output.main = /* @__PURE__ */ React22.createElement(Wrapper_default, { layout, styles: this.styles }, output.controls);
    } else if (output.info) {
      output.main = output.info;
    }
    if (status === STATUS.ERROR) {
      output.main = /* @__PURE__ */ React22.createElement(ErrorMessage, { styles: this.styles }, error);
    }
    return (
      // <Player ref={this.ref} data-ready={isReady} styles={this.styles}>
      /* @__PURE__ */ React22.createElement("div", null, output.main)
    );
  }
};
// eslint-disable-next-line react/static-property-placement
__publicField(SpotifyWebPlayer, "defaultProps", {
  autoPlay: false,
  initialVolume: 1,
  magnifySliderOnHover: false,
  name: "Spotify Web Player",
  persistDeviceSelection: false,
  showSaveIcon: false,
  syncExternalDeviceInterval: 5,
  syncExternalDevice: false
});
var src_default = SpotifyWebPlayer;
export {
  ERROR_TYPE,
  STATUS,
  TYPE,
  src_default as default
};
//# sourceMappingURL=index.mjs.map
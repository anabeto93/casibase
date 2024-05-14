// Copyright 2023 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export const AuthConfig = {
  // serverUrl: "https://door.casdoor.com",
  serverUrl: "https://auth.leashpay.test.com:8400",
  // serverUrl: "http://localhost:7001",
  clientId: "af6b5aa958822fb9dc33",
  appName: "app-casibase",
  organizationName: "casbin",
  redirectPath: "/callback",
};

export const DefaultOwner = "admin";
export const DefaultWordsetName = "word";

export const EnableExtraPages = false;

export const ShortcutPageItems = [];

export const UsageEndpoints = [];

export const AiName = "AI";
export const AiAvatar = "https://cdn.casbin.com/casdoor/static/gpt.png";

export const IframeUrl = "";

export const ForceLanguage = "";
export const DefaultLanguage = "en";

export const AppUrl = "";

export const ShowGithubCorner = false;
export const IsDemoMode = false;

export const ThemeDefault = {
  themeType: "default",
  colorPrimary: "#5734d3",
  borderRadius: 6,
  isCompact: false,
};

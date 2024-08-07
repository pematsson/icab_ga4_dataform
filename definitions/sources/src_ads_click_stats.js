/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

if (constants.GADS_GET_DATA){
    declare({
      type: "declaration",
      schema: constants.GADS_SOURCE_DATASET,
      ...(constants.GADS_SOURCE_PROJECT) && {database: constants.GADS_SOURCE_PROJECT},
      name: "ads_ClickStats_" + constants.GADS_CUSTOMER_ID,
      description: "This is the table that stores the Google Ads ads_ClickStats_customer_id export."
    });
}
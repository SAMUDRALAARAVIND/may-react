import { Endpoints } from "../../../network/Endpoints";
import { request } from "../../../network/request";
import {
  TabKeys,
  updateActionStatus,
  updateApiStatusByTabKey,
} from "./usersSlice";

export async function fetchAllSuggestions(dispatch) {
  dispatch(
    updateApiStatusByTabKey({
      tabId: TabKeys.SUGGESTIONS,
      apiStatus: "pending",
    })
  );
  const { success, data } = await request({ url: Endpoints.suggestions });
  dispatch(
    updateApiStatusByTabKey({
      tabId: TabKeys.SUGGESTIONS,
      apiStatus: success ? "success" : "error",
      ...(success && { data: data.suggestions }),
    })
  );
}

export async function fetchAllFollowers(dispatch) {
  dispatch(
    updateApiStatusByTabKey({
      tabId: TabKeys.FOLLOWERS,
      apiStatus: "pending",
    })
  );
  const { success, data } = await request({ url: Endpoints.followers });
  dispatch(
    updateApiStatusByTabKey({
      tabId: TabKeys.FOLLOWERS,
      apiStatus: success ? "success" : "error",
      ...(success && { data }),
    })
  );
}

export async function fetchAllFollowing(dispatch) {
  dispatch(
    updateApiStatusByTabKey({
      tabId: TabKeys.FOLLOWING,
      apiStatus: "pending",
    })
  );
  const { success, data } = await request({ url: Endpoints.following });
  dispatch(
    updateApiStatusByTabKey({
      tabId: TabKeys.FOLLOWING,
      apiStatus: success ? "success" : "error",
      ...(success && { data }),
    })
  );
}

export function followOrUnFollowUser(user, tabId) {
  return async function (dispatch) {
    dispatch(updateActionStatus({ apiStatus: "pending", userId: user._id }));
    const { success } = await request({
      url: user.following ? Endpoints.unfollow : Endpoints.follow,
      method: "POST",
      data: {
        userId: user._id,
      },
    });

    dispatch(
      updateActionStatus({
        apiStatus: success ? "success" : "error",
        userId: user._id,
        tabId,
      })
    );
  };
}

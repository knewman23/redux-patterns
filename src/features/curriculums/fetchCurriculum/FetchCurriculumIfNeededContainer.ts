import React, { useEffect } from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { fetchCurriculum } from "./actionCreators";
import * as SelectState from "./reducer";
import * as SelectLookupState from "../lookup/reducer";

function FetchCurriculumIfNeededContainer({ curriculumKey, stateProps, fetchCurriculum, addCurriculumToChild, customLoading, children, hideError, childrenWhenError }: any) {
    const { curriculum, error, loading } = stateProps;
    const needFetch = curriculumKey && curriculum == null;

    useEffect(() => {
        if (needFetch) fetchCurriculum(curriculumKey);
    }, [curriculumKey, needFetch, fetchCurriculum]);

    if (loading) {
        return customLoading === undefined ? CircularProgress : customLoading;
    } else if (error) {
        return hideError ? (childrenWhenError || null) : {"Error fetching curriculum: ": error};
    } else if (!children || !curriculum) {
        return null;
    } else if (addCurriculumToChild) {
        return React.cloneElement(children, { curriculum }); // Add 'curriculum' to child props
    } else {
        return children;
    }
}

const mapStateToProps = (state: any, ownProps: any) => ({
    stateProps: {
        curriculum: SelectLookupState.selectCurriculum(state, ownProps.curriculumKey),
        error: SelectState.selectCurriculumFetchError(state, ownProps.curriculumKey),
        loading: SelectState.selectIsCurriculumLoading(state, ownProps.curriculumKey),
    },
});

const actionCreators = {
    fetchCurriculum,
};

export default connect(
    mapStateToProps,
    actionCreators
)(FetchCurriculumIfNeededContainer);

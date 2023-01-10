import {Helmet} from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {Grid, Container} from '@mui/material';
import Footer from 'src/components/Footer';

import RecentOrders from './RecentOrders';
import {observer, useLocalObservable} from "mobx-react";
import BoardStateKeeper from "../../../app/state/BoardStateKeeper";
import {useEffect} from "react";

const ApplicationsTransactions = observer(
    () => {

        const boardStateKeeper = useLocalObservable(() => BoardStateKeeper.instance);

        const {boardRdo} = boardStateKeeper;

        const findBoardList = async () => {
            await boardStateKeeper.findBoardList();
        }

        useEffect(() => {
            init();
        }, []);

        const init = () => {
            findBoardList();
        };

        return (
            <>
                <Helmet>
                    <title>Transactions - Applications</title>
                </Helmet>
                <PageTitleWrapper>
                    <PageHeader/>
                </PageTitleWrapper>
                <Container maxWidth="lg">
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="stretch"
                        spacing={3}
                    >
                        <Grid item xs={12}>
                            <RecentOrders
                            boards={boardRdo!==undefined? boardRdo.boards:[]}/>
                        </Grid>
                    </Grid>
                </Container>
                <Footer/>
            </>
        );
    }
)
export default ApplicationsTransactions;

import React, {Component} from 'react';
import DefaultLayout from "@/layouts/DefaultLayout";
import LayoutBlock from "@/layouts/partials/LayoutBlock";


class PageLayout extends Component {

    constructor(props) {
        super(props);
        this.defaultTitle = "Titre de la page";
        this.slug = this.props.slug;
        this.list = this.props.list;
        this.page = this.props.page;
        this.ListComponent = this.props.ListComponent;
    }


    render() {

        return (
            <DefaultLayout title={this.page?.title ?? this.defaultTitle} meta={this.page?.date}>
                <LayoutBlock>
                    <div dangerouslySetInnerHTML={{ __html: this.page?.contentHtml }} />
                </LayoutBlock>
                { this.list?.length > 0 &&
                    <LayoutBlock>
                        {
                            this.list.map((target) => {
                                return (
                                    <this.ListComponent {...target} />
                                )
                            })
                        }
                    </LayoutBlock>
                }
            </DefaultLayout>
        );
    }
}

export default PageLayout;
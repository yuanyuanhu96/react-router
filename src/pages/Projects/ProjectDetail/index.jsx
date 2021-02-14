import React, { Component } from 'react';

export default class ProjectDetail extends Component {
  state = {
    details: [
      {
        id: 1,
        title: 'Bubble',
        detail:
          'Bubble a platfrom for people to initiate and participate out door activities',
      },
      {
        id: 2,
        title: 'Lexio',
        detail:
          'During my internship in Narrative Science, I wored on onboarding of our Data Storytellig product - Lexio',
      },
      {
        id: 3,
        title: 'CRCR',
        detail:
          'CRCR is a community for gig worker to deal with their the job of their gig jobs',
      },
      {
        id: 4,
        title: 'HXT',
        detail:
          'HXT is a companian robot in that serves patients like a nurse, doctor and a family member',
      },
    ],
  };

  render() {
    const { details } = this.state;
    const { id, title } = this.props.match.params;
    const findResult =
      details.find((eachObj) => {
        return eachObj.id === Number(id);
      }) || {};
    return (
      <div>
        <h1>
          {id} {title}
        </h1>

        <p> {findResult.detail}</p>

      </div>
    );
  }
}

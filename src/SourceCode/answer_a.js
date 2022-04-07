import $ from 'jquery'

const PlayerService = {
  getPlayerTeamId: (playerId) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/player/' + playerId + '/team',
        success: function (data) {
          resolve(data)
        },
        error: function (error) {
          reject(error)
        }
      })
    })
  },
  getPlayers: (teamId) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/team/' + teamId + '/player',
        success: function (data) {
          resolve(data)
        },
        error: function (error) {
          reject(error)
        }
      })
    })
  }
}

const PlayerDetailsController = {
  playerId: 8,
  showTeammatesClick: async function () {
    try {
      const playerTeam = await PlayerService.getPlayerTeamId(this.playerId)
      const playerList = await PlayerService.getPlayers(playerTeam.id)
      // Render playerList
    } catch (error) {
      throw error
    }
  }
}

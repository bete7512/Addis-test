import Song from '../../models/song'

export const createSong = async (req, res) => {
  try {
    const { title, artist, album, genre } = req.body
    if (
      artist === undefined ||
      artist == '' ||
      title === undefined ||
      title == '' ||
      album === undefined ||
      album == '' ||
      genre === undefined ||
      genre == ''
    ) {
      res.status(400).json({ error: 'Missing required fields' })
      return
    }
    const newSong = new Song({ title, artist, album, genre })
    const savedSong = await newSong.save()
    res.json(savedSong)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const listSongs = async (req, res) => {
  try {
    const { page = 1, pageSize = 10, search } = req.query;

    const query = search ? { title: { $regex: new RegExp(search, 'i') } } : {};

    const songs = await Song.find(query)
      .skip((page - 1) * pageSize)
      .limit(Number(pageSize));

    res.json(songs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const getSong = async (req, res) => {
  try {
    const { id } = req.params
    const song = await Song.findById(id)
    if (!song) {
      res.status(404).json({ error: 'Song not found' })
      return
    }
    res.json(song)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const deleteSong = async (req, res) => {
  try {
    const { id } = req.params
    const deletedSong = await Song.findByIdAndDelete(id)
    res.json(deletedSong)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
    return
  }
}

export const updateSong = async (req, res) => {
  try {
    const { id } = req.params
    const updatedSong = await Song.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    res.json(updatedSong)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const generateAnalytics = async (req, res) => {
  try {
    const totalSongs = await Song.countDocuments() || 0;

    const distinctArtists = await Song.distinct('artist');
    const totalArtists = distinctArtists.length || 0;

    const distinctAlbums = await Song.distinct('album');
    const totalAlbums = distinctAlbums.length || 0;

    const distinctGenres = await Song.distinct('genre');
    const totalGenres = distinctGenres.length || 0;

    const genreCounts = await Song.aggregate([
      { $group: { _id: '$genre', count: { $sum: 1 } } },
      { $project: { _id: 0, genre: '$_id', count: 1 } },
    ]);

    const artistCounts = await Song.aggregate([
      { $group: { _id: '$artist', count: { $sum: 1 } } },
      { $project: { _id: 0, artist: '$_id', count: 1 } },
    ]);

    const albumCounts = await Song.aggregate([
      { $group: { _id: '$album', count: { $sum: 1 } } },
      { $project: { _id: 0, album: '$_id', count: 1 } },
    ]);

    const analyticsData = {
      totalSongs,
      totalArtists,
      totalAlbums,
      totalGenres,
      genreCounts,
      artistCounts,
      albumCounts,
    };

    res.json(analyticsData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error ' + error.message });
  }
};

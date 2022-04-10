

/*===================================================================================*/
/*	CUSTOM JS/JQUERY SCRIPTS
/*===================================================================================*/

$('#modal').on('hide.bs.modal', function () {
    $video = $(this).find('video')[0].pause();
});

$('#modal').on('show.bs.modal', function (e) {
    
    videoLink = $(e.relatedTarget).data('link');
    $video = $(this).find('video')[0];

    if (videoLink != $video.src)
    {
        $video.src = videoLink;
        $video.load();
    }
});

$('#modal-img').on('show.bs.modal', function (e) {
    
    imgLink = $(e.relatedTarget).data('link');
    $img = $(this).find('img')[0];

    if (imgLink != $img.src)
        $img.src = imgLink;
        
});